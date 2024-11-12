<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data['movie_id'])){
    $movie_id = $data['movie_id'];

    $getRatings = $conn->prepare('SELECT rate_value FROM rating WHERE movie_id = ?');
    $getRatings->bind_param('i',$movie_id);

    $getRatings->execute();
    $result = $getRatings->get_result();

    if($result->num_rows>0){
        $totalRating = 0;
        $ratingCount = 0;

        //increments the nb of rows referencing a certain movie
        while($row = $result -> fetch_assoc()){
            $totalRating += $row['rate_value'];
            $ratingCount++;
        }

        $averageRating = round($totalRating / $ratingCount , 1);

        echo json_encode(['success'=>true, 'averageRating'=>$averageRating]);
        exit();
    }else{
        echo json_encode(['success'=>false, 'message'=>'Movie is not yet rated by any user']);
    }
    $getRatings->close();
}else{
    echo json_encode(['success' => false, 'message' => 'Movie ID not provided']);   
}

$conn->close();
?>   