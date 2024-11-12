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
if (isset($data['user_id']) && isset($data['movie_id']) && isset($data['rate_value'])) {
    $user_id = $data['user_id'];
    $movie_id = $data['movie_id'];
    $rate_value = $data['rate_value'];

    // Check if the movie is bookmarked
    $query = "SELECT * FROM rating WHERE user_id = ? AND movie_id = ? AND rate_value= ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('iii', $user_id, $movie_id, $rate_value);
    $stmt->execute();
    $result = $stmt->get_result();

    // Return whether the movie is bookmarked or not
    if ($result->num_rows > 0) {
        echo json_encode([ 'success'=>true ,'rateValue' => $rate_value]);
    } else {
        echo json_encode(['success' => false, 'message'=>'Movie not rated yet']);
    }

    $stmt->close();
} else {
    // If user_id or movie_id is not provided, return false
    echo json_encode(['success' => false]);
}
?>