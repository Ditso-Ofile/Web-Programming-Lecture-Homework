<?php


$host = "localhost";
$username = "root"; 
$password = "";     
$dbname = "databaselesson"; 

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
?>