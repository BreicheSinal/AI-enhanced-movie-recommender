<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$pass = $data['pass'] ?? '';
$email = $data['email'] ?? '';
$user_type = 'normal';

if (empty($username) || empty($pass) || empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Username, password and email are required']);
    exit;
}

    $checkUserSql = "SELECT * FROM users WHERE username = ?";
    $query = $conn->prepare($checkUserSql);
    $query->bind_param("s", $username);
    $query->execute();
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(['success' => false, 'error' => 'User already exists']);
    } else {
        
        $hashedPassword = password_hash($pass, PASSWORD_DEFAULT);

        // Check if user_type is 'admin' and restrict to one admin
        $userTypeCheckSql = "SELECT * FROM users WHERE user_type_id = (SELECT user_type_id FROM user_type WHERE user_type='admin')";
        $userTypeCheckQuery = $conn->prepare($userTypeCheckSql);
        $userTypeCheckQuery->execute();
        $userTypeResult = $userTypeCheckQuery->get_result();

        if ($user_type == 'admin' && $userTypeResult->num_rows > 0) {
            echo json_encode(['success' => false, 'error' => 'Admin user already exists']);

        }else {

             $userTypeIdQuery = $conn->prepare("SELECT user_type_id FROM user_type WHERE user_type=?");
             $userTypeIdQuery->bind_param("s", $user_type);
             $userTypeIdQuery->execute();
             $userTypeIdResult = $userTypeIdQuery->get_result();
             $userTypeId = $userTypeIdResult->fetch_assoc()['user_type_id'];
      
        $insertSql = "INSERT INTO users (username, pass, email, user_type_id) VALUES (?,?,?,?)";
        $insertQuery = $conn->prepare($insertSql);
        $insertQuery->bind_param("sssi", $username, $hashedPassword, $email, $userTypeId);

        if ($insertQuery->execute()) {
            $userId = $conn->insert_id;
            echo json_encode(['success' => true, 'user_id' => $userId]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Error creating user']);
        }
    
        $insertQuery->close();
    }
        $query->close();
        $userTypeCheckQuery->close(); 
}
    