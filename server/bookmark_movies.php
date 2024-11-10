<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

//gets the raw POST data which is a JSON
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['movie_id'])) {
    $movie_id = $data['movie_id'];
    echo $movie_id; 
} else {
    echo "Movie ID not provided.";
}

?>