<?php 
ini_set('session.gc_maxlifetime', 86400);  // 1 day 
ini_set('session.cookie_lifetime', 86400);  // 1 day

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

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

$checkUserSql = "SELECT users.id, users.pass, users.username, user_type.user_type 
                 FROM users 
                 JOIN user_type ON users.user_type_id = user_type.user_type_id 
                 WHERE username = ?";
$query = $conn->prepare($checkUserSql);
$query->bind_param("s", $username);
$query->execute();
$result = $query->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
} else {
    $user = $result->fetch_assoc();
    error_log('User fetched: ' . print_r($user, true));

    if (password_verify($pass, $user['pass'])) {
        $_SESSION['id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['user_type'] = $user['user_type'];

        error_log("Session ID in login.php: " . session_id());
error_log("Session data in login.php: " . print_r($_SESSION, true));
        
        echo json_encode(['success' => true, 'id' => $user['id'], 'user_type' => $user['user_type']]);

    
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
    }
}

$query->close();
$conn->close();
?>
