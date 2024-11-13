<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

include 'connection.php';


$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['movie_id']) && isset($data['user_id'])) {
    $movie_id = $data['movie_id'];
    $user_id = $data['user_id'];

    $checkBookmark = 'SELECT * FROM bookmark WHERE user_id = ? AND movie_id = ?';
    $checkQuery = $conn->prepare($checkBookmark);
    $checkQuery->bind_param('ii',$user_id, $movie_id);

    $checkQuery->execute();
    $checkQuery->store_result();

    if($checkQuery->num_rows>0){
        //movie is already bookmarked so remove it
        $removeBookmark = 'DELETE FROM bookmark WHERE user_id = ? AND movie_id = ?';
            if ($deleteQuery = $conn->prepare($removeBookmark)) {
                $deleteQuery->bind_param('ii', $user_id, $movie_id);
                if ($deleteQuery->execute()) {
                    echo json_encode(['success' => true, 'message' => 'Movie removed from bookmarks']);
                } else {
                    echo json_encode(['success' => false, 'message' => 'Failed to remove movie']);
                }
                $deleteQuery->close();
            } else {
                echo json_encode(['success' => false, 'message' => 'Failed to prepare delete query']);
            }
    } else {
        // movie not bookmarked, add it
        $addQuery = 'INSERT INTO bookmark (user_id, movie_id) VALUES (?, ?)';
        $addStmt = $conn->prepare($addQuery);
        $addStmt->bind_param('ii', $user_id, $movie_id);
        if ($addStmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Movie bookmarked']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to bookmark']);
        }
        $addStmt->close();
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Movie ID or User ID not provided']);
}

?>