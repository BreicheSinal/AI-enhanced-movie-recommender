document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('user_id'); 
    const bookmarkedContainer = document.querySelector('.bookmarked-movies');

    const fetchBookmarkedMovies = async () => {
        try {
            const response = await axios.get(`http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_bookmarked_movies.php?user_id=${userId}`);
            if (response.data.success && Array.isArray(response.data.data)) {
                renderBookmarkedMovies(response.data.data);
            } else {
                console.error('Error fetching bookmarked movies:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching bookmarked movies:', error);
        }
    };

    const renderBookmarkedMovies = (movies) => {
        bookmarkedContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <img src="${movie.image_url}" alt="${movie.title}">
            `;
            bookmarkedContainer.appendChild(movieElement);
        });
    };

    fetchBookmarkedMovies();
});
