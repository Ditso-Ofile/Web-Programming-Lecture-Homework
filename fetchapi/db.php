<?php


$host = "sql100.infinityfree.com";
$username = "if0_41687999"; 
$password = "Ofiledt123";     
$dbname = "if0_41687999_lecturedb"; 

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
?>