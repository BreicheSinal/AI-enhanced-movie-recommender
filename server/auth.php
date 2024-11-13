<?php
session_start();

header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");


if (!isset($_SESSION['id']) || !isset($_SESSION['username'])) {
    echo json_encode([
        'success' => false,
        'error' => 'Unauthorized access. Please log in again.'
    ]);
    exit();
}

if (isset($_GET['id']) && $_GET['id'] != $_SESSION['id']) {
    echo json_encode([
        'success' => false,
        'error' => 'Invalid ID. Access denied.'
    ]);
    exit();
}


echo json_encode([
    'success' => true,
    'username' => $_SESSION['username'],
    'id' => $_SESSION['id']
]);
