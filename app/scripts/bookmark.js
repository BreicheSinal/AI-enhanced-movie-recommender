const user_id = localStorage.getItem("user_id");

function checkBookmarkStatus(bookmark,movie){
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
            setBookmarked(bookmark);
        }else{
            setNotBookmarked(bookmark);
        }
    })
    .catch(error => console.log(error));
}

function toggleBookmark(bookmark, movie){
    
    checkBookmarkStatus(bookmark,movie);

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
            setBookmarked(bookmark);
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
            setNotBookmarked(bookmark);
        }else{
            console.log('Failed to bookmark', data.message);
        }        
    })
    .catch(error => console.log('Error: ', error)); 
}

//set button as clicked
function setBookmarked(bookmark) {
    
    bookmark.innerHTML = `
        <svg class='clicked-bookmark' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
        </svg>
    `;
    bookmark.classList.add('clicked'); // Mark as clicked
}

//set button as not clicked
function setNotBookmarked(bookmark) {
    bookmark.innerHTML = `
        <svg class='not-clicked-bookmark' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
        </svg>
    `;
    bookmark.classList.remove('clicked'); // Remove clicked class
}