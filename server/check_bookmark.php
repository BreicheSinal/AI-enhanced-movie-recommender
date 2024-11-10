<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

$data = json_decode(file_get_contents('php://input'), true);

// Check if the required data is available in the JSON
if (isset($data['user_id']) && isset($data['movie_id'])) {
    $user_id = $data['user_id'];
    $movie_id = $data['movie_id'];

    // Check if the movie is bookmarked
    $query = "SELECT * FROM bookmark WHERE user_id = ? AND movie_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('ii', $user_id, $movie_id);
    $stmt->execute();
    $result = $stmt->get_result();

    // Return whether the movie is bookmarked or not
    if ($result->num_rows > 0) {
        echo json_encode(['bookmarked' => true]);
    } else {
        echo json_encode(['bookmarked' => false]);
    }

    $stmt->close();
} else {
    // If user_id or movie_id is not provided, return false
    echo json_encode(['bookmarked' => false]);
}
?>