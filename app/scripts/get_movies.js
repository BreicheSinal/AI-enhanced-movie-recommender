fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
    });