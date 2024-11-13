<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

$getMovies = 'SELECT * FROM movies';
$query = $conn->prepare($getMovies);
$query->execute();
$result = $query->get_result();

$movies = [];
while ($row = $result->fetch_assoc()) {
    $movies[] = $row;
}

$response = [
    "success" => true,
    "data" => $movies
];
echo json_encode($movies);

?>   