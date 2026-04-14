<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;

include 'db.php';
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Fetch from categories table
        $stmt = $pdo->query("SELECT * FROM categories");
        echo json_encode(['status' => 'Read success!', "readData" => $stmt->fetchAll()]);
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        try {
            // Match columns cname and price from categories table
            $stmt = $pdo->prepare("INSERT INTO categories (cname, price) VALUES (?, ?)");
            $stmt->execute([$data['name'], $data['price']]);
            echo json_encode(['status' => 'Create success!']);
        } catch(PDOException $e) {
            echo json_encode(['status' => 'Create error: ' . $e->getMessage()]);
        }
        break;
    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        try {
            // Use cname as the identifier for deletion
            $stmt = $pdo->prepare("DELETE FROM categories WHERE cname = ?");
            $stmt->execute([$data['name']]);
            echo json_encode(['status' => 'Delete success!']);
        } catch(PDOException $e) {
            echo json_encode(['status' => 'Delete error!']);
        }
        break;
}
?>