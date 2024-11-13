function calculateRating(movie){
    return fetch
    ('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/calculate_rating.php',
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
    .then(data => {
        if (data.success) {
            return data.averageRating;
        } else {
            return 0;
        }
    })
    .catch(error =>{
        console.log(error);
        return 0;
    });
}