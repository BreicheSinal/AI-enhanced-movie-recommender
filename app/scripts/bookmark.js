function bookmarkMovie(bookmark, movie){
    bookmark.innerHTML=`
            <svg class='clicked-bookmark' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
            `   
    fetch
    ('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/bookmark_movies.php',
     {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            movie_id: movie.id
        })
     }
    )
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log('Movie bookmarked');
        }else{
            console.log('Failed to bookmark', data.message);
        }        
    })
    .catch(error => console.log('Error: ', error));     
}