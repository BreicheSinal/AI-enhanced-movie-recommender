<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$pass = $data['pass'];

if (empty($username) || empty($pass)) {
    echo json_encode(['success' => false, 'error' => 'Username and Password are required']);
    exit;
}

$checkUserSql = "SELECT id, pass FROM users WHERE username = ?";
$query = $conn->prepare($checkUserSql);
$query->bind_param("s", $username);
$query->execute();
$result = $query->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
} else {
    $user = $result->fetch_assoc();

    if (password_verify($pass, $user['pass'])) {
        echo json_encode(['success' => true, 'id' => $user['id']]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
    }
}

$query->close();
$conn->close();
?>
