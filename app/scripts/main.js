// // On page load, verify session using auth.php
// window.onload = async function() {
//     try {
//         const response = await fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/auth.php', {
//             method: 'GET',
//             credentials: 'include'  // This ensures cookies are sent with the request
//         });
//         const result = await response.json();
        
//         if (!result.success) {
//             // If not authenticated, redirect to login page
//             alert(result.error || 'Session expired. Redirecting to login.');
//             window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
//         } else {
//             document.getElementById("welcomeMessage").textContent = `Welcome, ${result.username}`;
//         }
//     } catch (error) {
//         console.error('Error verifying session:', error);
//         alert('An error occurred. Please log in again.');
//         window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
//     }
// };


document.getElementById("logoutButton").addEventListener("click", async function() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");

    try {
        const response = await fetch("http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/logout.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'  
        });

        const result = await response.json();

        if (result.success) {
            window.location.href = 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html';
        } else {
            alert("Failed to log out. Please try again.");
        }
    } catch (error) {
        console.error("Logout error:", error);
        alert("An error occurred during logout. Please try again.");
    }
});


// let moviesArray = [];
// fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
//     .then(response => response.json())
//     .then(movies => {
//         console.log('Fetched Movies:', movies);


//         moviesArray = movies;

//         console.log(moviesArray)

//         const moviesContainer = document.getElementById("movies-container");

//         movies.forEach(movie => {
//             const movieElement = document.createElement('div');
//             const bookmark = document.createElement('span');
//             bookmark.setAttribute('title','Bookmark');

//             movieElement.innerHTML=`
//             <p>${movie.title}</p>
//             <p>${movie.description}</p>
//             <p>${movie.release_year}</p>
//             <p>${movie.genre}</p>
//             <p>${movie.duration}</p>
//             `
//             bookmark.innerHTML=`
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
//                 <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
//             </svg>
//             `
//             movieElement.appendChild(bookmark);
//             moviesContainer.appendChild(movieElement);
            
//             checkBookmarkStatus(bookmark,movie);
//             bookmark.addEventListener('click',()=>toggleBookmark(bookmark, movie));
//         });
//     });