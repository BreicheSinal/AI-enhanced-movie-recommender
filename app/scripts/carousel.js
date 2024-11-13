document.addEventListener('DOMContentLoaded', () => {
   
    fetchMovies();
});

function fetchMovies() {
    fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
        .then(response => response.json())
        .then(data => {
            // Save all movies to localStorage
            localStorage.setItem('movies', JSON.stringify(data));
            displayMovies(data);
            displayMovies2(data);
            
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}

const carouselContainer = document.querySelector('.carousel');
const carouselContainer2 = document.querySelector('.carousel2');

function displayMovies(movies) {
    const carousel = document.querySelector('.carousel');

    if (!carousel) {
        console.error("Carousel element not found. Make sure the .carousel element exists on this page.");
        return;
    }

    carousel.innerHTML = ''; // Clear any existing content
    const moviesToDisplay = movies.slice(0, 6);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        

        movieCard.innerHTML = `
            <img src="${movie.image_url}" alt="${movie.title}" class="movie-image">
            <h3>${movie.title}</h3>
        `;

        const viewButton = document.createElement('button');
        viewButton.textContent = "View Details";
        viewButton.classList.add('view-button');
        
        viewButton.addEventListener('click', () => {
            // Navigate to the details page with movie ID in the query parameter
            window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/movieDetail.html?id=${movie.id}`;
        });

        movieCard.appendChild(viewButton);
        carousel.appendChild(movieCard);
    });

    let currentIndex = 0;
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel();
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel();
    });

    function rotateCarousel() {
        if (movies.length === 0) return; 
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];
        
        carouselContainer.innerHTML = '';
        rotatedMovies.slice(0, 6).forEach(movie => { 
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            

            const viewButton = document.createElement('button');
            viewButton.textContent = "View Details";
            viewButton.classList.add('view-button');
            
            viewButton.addEventListener('click', () => {
                window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/movieDetail.html?id=${movie.id}`;
            });
    
            movieCard.appendChild(viewButton);
            carouselContainer.appendChild(movieCard);
        });
    }
}




function displayMovies2(movies) {
    const carousel2 = document.querySelector('.carousel2');

    if (!carousel2) {
        console.error("Carousel element not found. Make sure the .carousel element exists on this page.");
        return;
    }

    carousel2.innerHTML = ''; // Clear any existing content
    const moviesToDisplay = movies.slice(20, 26);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        

        movieCard.innerHTML = `
            <img src="${movie.image_url}" alt="${movie.title}" class="movie-image">
            <h3>${movie.title}</h3>
        `;

        const viewButton = document.createElement('button');
        viewButton.textContent = "View Details";
        viewButton.classList.add('view-button');
        
        viewButton.addEventListener('click', () => {
            // Navigate to the details page with movie ID in the query parameter
            window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/movieDetail.html?id=${movie.id}`;
        });

        movieCard.appendChild(viewButton);
        carousel2.appendChild(movieCard);
    });

    let currentIndex = 0;
    
    document.querySelector('.next-btn2').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel();
    });

    document.querySelector('.prev-btn2').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel();
    });

    function rotateCarousel() {
        if (movies.length === 0) return; 
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];
        
        carouselContainer2.innerHTML = '';
        rotatedMovies.slice(0, 6).forEach(movie => { 
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            const viewButton = document.createElement('button');
            viewButton.textContent = "View Details";
            viewButton.classList.add('view-button');
            
            viewButton.addEventListener('click', () => {
                window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/movieDetail.html?id=${movie.id}`;
            });
    
            movieCard.appendChild(viewButton);
            carouselContainer2.appendChild(movieCard);
        });
    }
}
