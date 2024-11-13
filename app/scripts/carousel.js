document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel');
    const carouselContainer2 = document.querySelector('.carousel2');
    let movies = []; 

    fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Movies Data:', data);
            localStorage.setItem('movies', JSON.stringify(data));
            console.log('Movies data saved to localStorage');

            movies = JSON.parse(localStorage.getItem('movies')) || [];
            renderMovies(movies);
            renderNewMovies(movies);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

        function renderMovies(movies) {
            carouselContainer.innerHTML = ''; 
            const moviesToDisplay = movies.slice(0, 6);
        
            moviesToDisplay.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                
                movieCard.innerHTML = `
                    <img src="${movie.image_url}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.genre} | ${movie.duration}</p>
                    <button class="view-details-btn" data-id="${movie.id}">View Details</button>
                `;
                
                carouselContainer.appendChild(movieCard);
            });
        
            const detailButtons = document.querySelectorAll('.view-details-btn');
            detailButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const movieId = event.target.getAttribute('data-id'); 
                    window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/signup.html?id=${movieId}`; 
                });
            });
        }
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
            
            carouselContainer.appendChild(movieCard);
        });
    }

    function renderNewMovies(movies) {
        carouselContainer2.innerHTML = ''; 
        const moviesToDisplay = movies.slice(0, 6);
    
        moviesToDisplay.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
                <button class="view-details-btn" data-id="${movie.id}">View Details</button>
            `;
            
            carouselContainer2.appendChild(movieCard);
        });
    
        const detailButtons = document.querySelectorAll('.view-details-btn');
        detailButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.getAttribute('data-id'); 
                window.location.href = `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/signup.html?id=${movieId}`; 
            });
        });
    }

    let currentIndex2 = 0;

    document.querySelector('.next-btn2').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex2++;
        if (currentIndex2 > movies.length - 1) {
            currentIndex2 = 0;
        }
        rotateCarousel2();
    });

    document.querySelector('.prev-btn2').addEventListener('click', () => {
        if (movies.length === 0) return;
        currentIndex2--;
        if (currentIndex2 < 0) {
            currentIndex2 = movies.length - 1;
        }
        rotateCarousel2();
    });

    function rotateCarousel2() {
        if (movies.length === 0) return;
        const rotatedMovies = [...movies.slice(currentIndex2), ...movies.slice(0, currentIndex2)];

        carouselContainer2.innerHTML = '';
        rotatedMovies.slice(20, 26).forEach(movie => { 
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer2.appendChild(movieCard);
        });
    }
});
