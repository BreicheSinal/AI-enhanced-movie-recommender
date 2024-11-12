<?php

include "connection.php";

// Get the JSON data from the POST request
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is received
if (isset($data) && !empty($data)) {
    // Prepare the SQL query with placeholders
    $query = $conn->prepare("INSERT INTO movies (title, description, release_year, genre, duration, image_url) VALUES (?, ?, ?, ?, ?, ?)");
    $query->bind_param("ssisss", $title, $description, $releaseYear, $genre, $duration, $imageUrl);

    // Loop through each movie data and insert into the database
    foreach ($data as $movie) {
        $title = $movie['title'];
        $description = $movie['description'];
        $releaseYear = $movie['releaseYear'];
        $genre = $movie['genre'];
        $duration = $movie['duration'];
        $imageUrl = $movie['imageUrl'];

        if ($query->execute()) {
            echo "Movie '$title' added successfully.\n";  // Success message for each movie
        } else {
            echo "Error adding movie '$title': " . $query->error . "\n";  // Error message if insertion fails
        }
    }

} else {
    echo "No data received.";
}

