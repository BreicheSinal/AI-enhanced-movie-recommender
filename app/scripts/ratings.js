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
                rate_value:rateValue,
            })
        }
    )
    .then(response=>response.json())
    .then(data => {
        if(data.success){
            const star = document.getElementById(`star-${movie.id}-${rateValue}`);
            console.log(star);
            setRating(movie, rateValue);
        } 
    })
    .catch(error => console.log('Error: ', error)); 
}

function checkRatingStatus(movie){
    fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/check_rating.php',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        //checks if there's a row in rating table with these values
        body:JSON.stringify({
            user_id: user_id,
            movie_id: movie.id,
        })
    })
    .then(response => response.json())
    .then(data=>{
        if(data.rateValue){
            console.log('the rate value is: ',data.rateValue);
            setRating(movie, data.rateValue);
        }else{
            console.log(`movie ${data.movie_id} not rated yet`)
        }
    })
    .catch(error => console.log(error));
}

function setRating(movie, rateValue) {
    for(let i=1; i<=rateValue; i++){
        //if user pressed on star-1-3, the star 1-1 till star1-3 will have fill of gold
        document.getElementById(`star-${movie.id}-${i}`).innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
        </svg>`
    }
}