fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
    .then(response => response.json())
    .then(movies => {
        const moviesContainer = document.getElementById("movies-container");

        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML=`
            <p>${movie.title}</p>
            <p>${movie.description}</p>
            <p>${movie.release_year}</p>
            <p>${movie.genre}</p>
            <p>${movie.duration}</p>
            `
            moviesContainer.appendChild(movieElement);
        });
    });
    