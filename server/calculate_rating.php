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

    $getMovieDetails = $conn->prepare('SELECT id, title, description, release_year, genre, duration FROM movies WHERE id = ?');
    $getMovieDetails->bind_param('i', $movie_id);
    $getMovieDetails->execute();
    $movieResult = $getMovieDetails->get_result();
    
    if ($movieResult->num_rows > 0) {
        $movie = $movieResult->fetch_assoc();

        // Get ratings
        $getRatings = $conn->prepare('SELECT rate_value FROM rating WHERE movie_id = ?');
        $getRatings->bind_param('i', $movie_id);
        $getRatings->execute();
        $ratingResult = $getRatings->get_result();

        if($ratingResult->num_rows>0){
            $totalRating = 0;
            $ratingCount = 0;

            //increments the nb of rows referencing a certain movie
            while($row = $ratingResult -> fetch_assoc()){
                $totalRating += $row['rate_value'];
                $ratingCount++;
            }
        
            $averageRating = round($totalRating / $ratingCount , 1);

            $updateRating = $conn->prepare('UPDATE movies SET rating = ? WHERE id = ?');
            $updateRating->bind_param('di', $averageRating, $movie_id);
            $updateRating->execute();

            echo json_encode([
                'success'=>true, 
                'averageRating'=>$averageRating, 
                'movie'=> $movie
             ]);

            exit();
        }else{
        echo json_encode(['success'=>false, 'message'=>'Movie is not yet rated by any user']);
        }
        $getRatings->close();
    }else{
        echo json_encode(['success' => false, 'message' => 'Movie not found']);   
    }
}else{
    echo json_encode(['success' => false, 'message' => 'Movie ID not provided']);
}
$conn->close();
?>   