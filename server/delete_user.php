<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data['id'];

if (empty($userId)) {
    echo json_encode(['success' => false, 'error' => 'User ID is required']);
    exit;
}

$deleteSql = "DELETE FROM users WHERE id = ?";
$query = $conn->prepare($deleteSql);
$query->bind_param("i", $userId);
$query->execute();

if ($query->affected_rows > 0) {
    echo json_encode(['success' => true, 'message' => 'User deleted successfully']);
} else {
    echo json_encode(['success' => false, 'error' => 'User not found or deletion failed']);
}

$query->close();
$conn->close();

?>
