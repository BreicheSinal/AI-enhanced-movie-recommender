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

    //checks if user has already rated the movie
    $check_query = $conn->prepare('SELECT * FROM rating WHERE user_id=? AND movie_id=?');
    $check_query->bind_param('ii',$user_id, $movie_id);

    $check_query->execute();
    $check_query->store_result();

    if($check_query->num_rows>0){
        //user already rated the movie
        echo json_encode(['success'=>false,'message'=>'Movie is already rated']);
    }else{
        //user didn't rate the movie yet, so insert
        $query = 'INSERT INTO rating (user_id, movie_id, rate_value) VALUES (?,?,?)';
        $add_query = $conn->prepare($query); 
        $add_query->bind_param('iii',$user_id, $movie_id, $rate_value);
        if($add_query->execute()){
            echo json_encode(['success'=>true, 'message'=>'Rating Added']);
        }else{
            echo json_encode(['success'=>false, 'message'=>'Failed to Add Rating']);
        }
    }

    
}

?>
