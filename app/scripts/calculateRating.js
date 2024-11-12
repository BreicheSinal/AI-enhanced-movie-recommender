let ratingsArray =[];

function calculateRating(movie){
    fetch
    ('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/calulate_rating.php',
     {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            movie_id: movie.id,
        })
     }
    )
    .then(response=>response.json())
    .then()
}