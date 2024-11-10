const user_id = localStorage.getItem("user_id");


function checkBookmarkStatus(movie){
    fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/check_bookmark.php',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user_id: user_id,
            movie_id: movie.id,
        })
    })
    .then(response => response.json())
    .then(data=>{
        if(data.bookmarked){
            //if movie is bookmarked, set the btn as bookmarked
            setBookmarked();
        }else{
            setNotBookmarked();
        }
    })
    .catch(error => console.log(error));
}

function toggleBookmark(bookmark, movie){
    if(bookmark.classList.contains('clicked')){
        //if already bookmarked, remove it 
        removeBookmark(bookmark, movie);
    } else { 
        //if not bookmarked, add it
        addBookmark(bookmark, movie);
    }
}

function addBookmark(bookmark, movie){
    fetch
    ('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/bookmark_movies.php',
     {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: user_id,
            movie_id: movie.id,
        })
     }
    )
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log('Movie bookmarked');
            setBookmarked();
        }else{
            console.log('Failed to bookmark', data.message);
        }        
    })
    .catch(error => console.log('Error: ', error)); 
}


function removeBookmark(bookmark, movie){
    fetch
    ('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/bookmark_movies.php',
     {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: user_id,
            movie_id: movie.id,
        })
     }
    )
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log('Movie removed from bookmarks');
            setNotBookmarked();
        }else{
            console.log('Failed to bookmark', data.message);
        }        
    })
    .catch(error => console.log('Error: ', error)); 
}