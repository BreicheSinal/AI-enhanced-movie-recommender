document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id')); 

    // Retrieve all movies from localStorage
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    // Find the movie that matches the ID
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        // Populate the page with the specific movie details
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-image').src = movie.image_url;
        document.getElementById('movie-genre').textContent = `Genre: ${movie.genre}`;
        document.getElementById('movie-duration').textContent = `Duration: ${movie.duration}`;
        document.getElementById('movie-description').textContent = movie.description;
    } else {
        console.error(`Movie with ID ${movieId} not found.`);
    }
});
