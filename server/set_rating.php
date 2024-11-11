<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['movie_id']) && isset($data['user_id']) && isset($data['rate_value'])) {
    $movie_id = $data['movie_id'];
    $user_id = $data['user_id'];
    $rate_value = $data['rate_value'];

    $query = 'INSERT INTO rating (user_id, movie_id, rate_value) VALUES (?,?,?)';
    $add_query = $conn->prepare($query); 
    $add_query->bind_param('iii',$user_id, $movie_id, $rate_value);
    if($add_query->execute()){
        echo json_encode(['success'=>true, 'message'=>'Rating Added']);
    }else{
        echo json_encode(['success'=>false, 'message'=>'Failed to Add Rating']);
    }
}

?>
