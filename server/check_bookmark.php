<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

$user_id = $_POST['user_id'];
$movie_id = $_POST['movie_id'];

$query = "SELECT * FROM bookmark WHERE user_id = ? AND movie_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ii', $user_id, $movie_id);
$stmt.execute();
$result = $stmt -> get_result();

//if movie is bookmarked return true
if($result->num_rows > 0){
    echo json_encode(['bookmarked'=>true]);
}else{
    echo json_encode(['bookmarked'=>false]);
}

$stmt->close();

?>