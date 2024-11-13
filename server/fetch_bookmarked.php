<?php
include 'connection.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = intval($_GET['user_id']);

$sql = "SELECT movies.id, movies.title, movies.genre, movies.release_year, movies.duration, movies.image_url
        FROM bookmark
        JOIN movies ON bookmark.movie_id = movies.id
        WHERE bookmark.user_id = $user_id";

$result = $conn->query($sql);

$movies = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $movies[] = $row;
    }
}

echo json_encode($movies);

$conn->close();
?>
