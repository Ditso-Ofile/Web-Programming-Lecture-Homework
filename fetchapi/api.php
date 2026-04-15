<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET': 
        $sql = "SELECT p.pname AS pizzaName, p.categoryname AS category, c.price 
                FROM pizzas p 
                LEFT JOIN categories c ON p.categoryname = c.cname";
        $result = $conn->query($sql);
        $pizzas = [];
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $pizzas[] = $row;
            }
        }
        echo json_encode($pizzas);
        break;

    case 'POST': 
        if(isset($input['pizzaName'])) {
            $name = $conn->real_escape_string($input['pizzaName']);
            $category = $conn->real_escape_string($input['category']);
 
            $vegetarian = 0; 

            $sql = "INSERT INTO pizzas (pname, categoryname, vegetarian) VALUES ('$name', '$category', $vegetarian)";
            
            if($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Pizza added successfully"]);
            } else {
                echo json_encode(["error" => "Error adding pizza: " . $conn->error]);
            }
        }
        break;

    case 'PUT': 
  
        if(isset($input['originalName'])) {
            $originalName = $conn->real_escape_string($input['originalName']);
            $newName = $conn->real_escape_string($input['pizzaName']);
            $category = $conn->real_escape_string($input['category']);

            $sql = "UPDATE pizzas SET pname='$newName', categoryname='$category' WHERE pname='$originalName'";
            
            if($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Pizza updated successfully"]);
            } else {
                echo json_encode(["error" => "Error updating pizza: " . $conn->error]);
            }
        }
        break;

    case 'DELETE': 
        if(isset($input['pizzaName'])) {
            $name = $conn->real_escape_string($input['pizzaName']);
            $sql = "DELETE FROM pizzas WHERE pname='$name'";
            
            if($conn->query($sql) === TRUE) {
                echo json_encode(["message" => "Pizza deleted successfully"]);
            } else {
                echo json_encode(["error" => "Error deleting pizza: " . $conn->error]);
            }
        }
        break;

    default:
        echo json_encode(["message" => "Invalid Request"]);
        break;
}

$conn->close();
?>