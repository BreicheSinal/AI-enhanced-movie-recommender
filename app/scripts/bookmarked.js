document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('user_id'); 
    const bookmarkedContainer = document.querySelector('.bookmarked-movies');
    const bookmarksButton = document.getElementById('bookmarksButton');


    const fetchBookmarkedMovies = async () => {
        try {
            const response = await axios.get(`http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_bookmarked.php?user_id=${userId}`);
            if (response.data.success && Array.isArray(response.data.data)) {
                renderBookmarkedMovies(response.data.data);
            } else {
                console.error('Error fetching bookmarked movies:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching bookmarked movies:', error);
        }
    };

    console.log(localStorage.getItem('user_id'));
    if (userId) {
        console.log(userId);
      
        bookmarksButton.style.display = 'inline-block';
    } else {
        console.log("error");
        bookmarksButton.style.display = 'none';
    }

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
