let ratingsArray =[];

function calculateRating(movie){
    fetch
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
            console.log('Rating for movie',movie.id,' is ',data.averageRating, '/5');
        } else {
            console.error("Failed to calculate rating:", parsedData.message);
        }
    })
    .catch(error =>{
        console.log(error);
    });
}