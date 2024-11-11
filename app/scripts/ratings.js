function addRating(rateValue,movie){
    fetch
    ("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/set_rating.php",
        {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                user_id:user_id,
                movie_id: movie.id,
                rating_id:rateValue,
            })
        }
    )
    .then(response=>response.json())
    .then(data => {
        console.log(data);  
    })
    .catch(error => console.log('Error: ', error)); 
}
