<?php
$host = "sql100.infinityfree.com";
$username = "if0_41687999"; 
$password = "Ofiledt123";     
$dbname = "if0_41687999_lecturedb"; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
} catch (PDOException $e) {
    die(json_encode(['status' => 'Database connection failed']));
}
?>