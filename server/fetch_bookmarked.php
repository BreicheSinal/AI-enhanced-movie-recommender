<?php
include 'connection.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = intval($_GET['user_id']);

// getting the genres of the movies the user has bookmarked
$sql = "SELECT DISTINCT movies.genre
        FROM bookmark
        JOIN movies ON bookmark.movie_id = movies.id
        WHERE bookmark.user_id = $user_id";

$result = $conn->query($sql);

// storing genres
$genres = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $genres[] = $row['genre']; 
    }
}

// fetching 5 movies of the same genres
$movies = [];
if (!empty($genres)) {
    // preparing a list of genres for the query
    $genreList = "'" . implode("','", $genres) . "'";

    // quering to fetch 5 movies from the same genres
    $sql = "SELECT movies.id, movies.title, movies.genre, movies.release_year, movies.duration, movies.image_url
            FROM movies
            WHERE movies.genre IN ($genreList)
            AND movies.id NOT IN (
                SELECT movie_id FROM bookmark WHERE user_id = $user_id
            )
            LIMIT 5";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $movies[] = $row;  
        }
    }
}

echo json_encode($movies); 

