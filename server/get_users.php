<?php
session_start();
header("Content-Type: application/json");

if ($_SESSION['user_type'] !== 'admin') {
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

include 'connection.php';

$sql = "SELECT id, username, email, 
        (SELECT user_type FROM user_type WHERE user_type_id = users.user_type_id) AS user_type 
        FROM users";
$result = $conn->query($sql);

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode(['success' => true, 'users' => $users]);

$conn->close();
?>
