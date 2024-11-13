const carouselContainer = document.querySelector('.carousel');
const carouselContainer2 = document.querySelector('.carousel2');
const carouselContainer3 = document.querySelector('.carousel3');
const carouselContainer4 = document.querySelector('.carousel4');
const carouselContainer5 = document.querySelector('.carousel5');
const carouselContainer6 = document.querySelector('.carousel6');

function renderMovies(movies) {
    movies = movies.slice(0,15);
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${movie.image_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.genre} | ${movie.duration}</p>`
            if (movie.rating !== null && movie.rating !== undefined) {
                // Only add rating if it's available
                const ratingElement = document.createElement('p');
                ratingElement.innerText = `Rating: ${movie.rating}/5`;
                movieCard.appendChild(ratingElement);
            }
        ;
        
        carouselContainer.appendChild(movieCard);
    });



let currentIndex = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > movies.length - 1) {
        currentIndex = 0;
    }
    rotateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = movies.length - 1;
    }
    rotateCarousel();
});

function rotateCarousel() {

    const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];
    
    carouselContainer.innerHTML = '';
    rotatedMovies.forEach(movie => {
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
}

function renderNewMovies(newMovies) {

    newMovies=newMovies.slice(23, 40);

    carouselContainer2.innerHTML = ''; // Clear existing cards

    newMovies.forEach(movie2 => {
        const movieCard2 = document.createElement('div');
        movieCard2.classList.add('movie-card');
        
        movieCard2.innerHTML = `
            <img src="${movie2.image_url}" alt="${movie2.title}">
            <h3>${movie2.title}</h3>
            <p>${movie2.genre} | ${movie2.duration}</p>
        `;
        
        carouselContainer2.appendChild(movieCard2);
    });


    let currentIndex2 = 0;

    document.querySelector('.next-btn2').addEventListener('click', () => {
        currentIndex2++;
        if (currentIndex2 > newMovies.length - 1) {
            currentIndex2 = 0;
        }
        rotateCarousel2();
    });

    document.querySelector('.prev-btn2').addEventListener('click', () => {
        currentIndex2--;
        if (currentIndex2 < 0) {
            currentIndex2 = newMovies.length - 1;
        }
        rotateCarousel2();
    });

    function rotateCarousel2() {
        // Shift the array based on the current index
        const rotatedMovies = [...newMovies.slice(currentIndex2), ...newMovies.slice(0, currentIndex2)];

        carouselContainer2.innerHTML = '';
        rotatedMovies.forEach(movie => {
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
}

function renderDramaMovies(movies) {

    movies.forEach(movie => {
        
        if(movie.genre.toLowerCase().includes('drame') || movie.genre.toLowerCase().includes('dramatique')){
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer3.appendChild(movieCard);
        }
    });


    let currentIndex = 0;

    document.querySelector('.next-btn3').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel3();
    });

    document.querySelector('.prev-btn3').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel3();
    });

    function rotateCarousel3() {
        // Shift the array based on the current index
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];

        carouselContainer3.innerHTML = '';
        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer3.appendChild(movieCard);
        });
    }
}

function renderComedyMovies(movies) {

    movies.forEach(movie => {
        
        if(movie.genre.toLowerCase().includes('comédie')){
            console.log(movie.genre);
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer4.appendChild(movieCard);
        }
    });


    let currentIndex = 0;

    document.querySelector('.next-btn4').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel4();
    });

    document.querySelector('.prev-btn4').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel4();
    });

    function rotateCarousel4() {
        // Shift the array based on the current index
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];

        carouselContainer4.innerHTML = '';
        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer4.appendChild(movieCard);
        });
    }
}

function renderAnimationMovies(movies) {

    movies.forEach(movie => {
        
        if(movie.genre.toLowerCase().includes('animation')){
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer5.appendChild(movieCard);
        }
    });


    let currentIndex = 0;

    document.querySelector('.next-btn5').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel5();
    });

    document.querySelector('.prev-btn5').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel5();
    });

    function rotateCarousel5() {
        // Shift the array based on the current index
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];

        carouselContainer5.innerHTML = '';
        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer5.appendChild(movieCard);
        });
    }
}

function renderAllMovies(movies) {

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${movie.image_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.genre} | ${movie.duration}</p>
        `;
        
        carouselContainer6.appendChild(movieCard);
    });


    let currentIndex = 0;

    document.querySelector('.next-btn6').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > movies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel6();
    });

    document.querySelector('.prev-btn6').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = movies.length - 1;
        }
        rotateCarousel6();
    });

    function rotateCarousel6() {
        // Shift the array based on the current index
        const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];

        carouselContainer6.innerHTML = '';
        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            carouselContainer6.appendChild(movieCard);
        });
    }
}