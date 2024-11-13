let moviesArray = [];

fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
    .then(response => response.json())
    .then(movies => {
        console.log('Fetched Movies:', movies);

        moviesArray = movies;

        //const moviesContainer = document.getElementById("movies-container");

        if(window.location.href !== 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/details.html'){            
            renderMovies(movies);
            renderNewMovies(movies);
            renderDramaMovies(movies);
            renderComedyMovies(movies);
            renderAnimationMovies(movies);
            renderAllMovies(movies);
        }
    });
    