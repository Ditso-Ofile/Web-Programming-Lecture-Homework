<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

include 'db.php';
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM categories");
        echo json_encode(['status' => 'Read success!', "readData" => $stmt->fetchAll()]);
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO categories (cname, price) VALUES (?, ?)");
        $stmt->execute([$data['name'], $data['price']]);
        echo json_encode(['status' => 'Create success!']);
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        try{
        $stmt = $pdo->prepare("UPDATE categories SET price = ? WHERE cname = ?");
        $stmt->execute([$data['price'], $data['name'],$data['oldName']]);
        echo json_encode(['status' => 'Update success!']);}
        catch(PDOException $e) {
        echo json_encode(['status' => 'Update error: ' . $e->getMessage()]);
    }

        break;
    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("DELETE FROM categories WHERE cname = ?");
        $stmt->execute([$data['name']]);
        echo json_encode(['status' => 'Delete success!']);
        break;
}
?>