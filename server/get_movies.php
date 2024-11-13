<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'connection.php';

$movies = [];
if (isset($_GET['id'])) {
    $movieId = intval($_GET['id']);
    $getMovie = 'SELECT * FROM movies WHERE id = ?';
    $query = $conn->prepare($getMovie);
    $query->bind_param('i', $movieId);
} else {
    $getMovie = 'SELECT * FROM movies';
    $query = $conn->prepare($getMovie);
}

$query->execute();
$result = $query->get_result();

while ($row = $result->fetch_assoc()) {
    $movies[] = $row;
}

echo json_encode($movies);
?>
