<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

$user_id = $_GET['user_id']; 

$getBookmarkedMovies = "
    SELECT movies.*
    FROM movies
    JOIN bookmark ON movies.id = bookmark.movie_id
    WHERE bookmark.user_id = ?
";
$query = $conn->prepare($getBookmarkedMovies);
$query->bind_param('i', $user_id);
$query->execute();
$result = $query->get_result();

$bookmarkedMovies = [];
while ($row = $result->fetch_assoc()) {
    $bookmarkedMovies[] = $row;
}

echo json_encode(['success' => true, 'data' => $bookmarkedMovies]);
?>
