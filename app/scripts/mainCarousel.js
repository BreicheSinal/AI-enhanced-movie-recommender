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
            };

            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });
        
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
        
        movieCard.addEventListener('click', () => {
            console.log('clickeddd');
        });

        carouselContainer.appendChild(movieCard);
    });
}
}

function renderNewMovies(movies) {

    movies=movies.slice(23, 40);

    carouselContainer2.innerHTML = ''; // Clear existing cards

    movies.forEach(movie2 => {
        const movieCard2 = document.createElement('div');
        movieCard2.classList.add('movie-card');

        movieCard2.innerHTML = `
            <img src="${movie2.image_url}" alt="${movie2.title}">
            <h3>${movie2.title}</h3>
            <p>${movie2.genre} | ${movie2.duration}</p>
        `;

        movieCard2.addEventListener('click', () => {
            console.log('clickeddd');
        });
        
        carouselContainer2.appendChild(movieCard2);
    });


    let currentIndex2 = 0;

    document.querySelector('.next-btn2').addEventListener('click', () => {
        currentIndex2++;
        if (currentIndex2 > movies.length - 1) {
            currentIndex2 = 0;
        }
        rotateCarousel2();
    });

    document.querySelector('.prev-btn2').addEventListener('click', () => {
        currentIndex2--;
        if (currentIndex2 < 0) {
            currentIndex2 = movies.length - 1;
        }
        rotateCarousel2();
    });

    function rotateCarousel2() {
        // Shift the array based on the current index
        const rotatedMovies = [...movies.slice(currentIndex2), ...movies.slice(0, currentIndex2)];

        carouselContainer2.innerHTML = '';
        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;

            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });
            
            carouselContainer2.appendChild(movieCard);
        });
    }
}

function renderDramaMovies(movies) {

    const dramaMovies = movies.filter(movie =>
        movie.genre.toLowerCase().includes('drame') || 
        movie.genre.toLowerCase().includes('dramatique')
    );

    let currentIndex = 0;

    function rotateCarousel3() {
        const rotatedMovies = [
            ...dramaMovies.slice(currentIndex),
            ...dramaMovies.slice(0, currentIndex)
        ];

        carouselContainer3.innerHTML = '';

        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });

            carouselContainer3.appendChild(movieCard);
        });
    }

    document.querySelector('.next-btn3').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > dramaMovies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel3();
    });

    document.querySelector('.prev-btn3').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = dramaMovies.length - 1;
        }
        rotateCarousel3();
    });

    rotateCarousel3();
}

function renderComedyMovies(movies) {

    const comedyMovies = movies.filter(movie => 
        movie.genre.toLowerCase().includes('comédie')
    );

    let currentIndex = 0;

    function rotateCarousel4() {
        const rotatedMovies = [
            ...comedyMovies.slice(currentIndex),
            ...comedyMovies.slice(0, currentIndex)
        ];

        carouselContainer4.innerHTML = '';

        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });

            carouselContainer4.appendChild(movieCard);
        });
    }

    document.querySelector('.next-btn4').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > comedyMovies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel4();
    });

    document.querySelector('.prev-btn4').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = comedyMovies.length - 1;
        }
        rotateCarousel4();
    });

    rotateCarousel4();
}

function renderAnimationMovies(movies) {

    const animationMovies = movies.filter(movie => 
        movie.genre.toLowerCase().includes('animation')
    );

    let currentIndex = 0;

    function rotateCarousel5() {
        const rotatedMovies = [
            ...animationMovies.slice(currentIndex),
            ...animationMovies.slice(0, currentIndex)
        ];

        carouselContainer5.innerHTML = '';

        rotatedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
            `;
            
            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });

            carouselContainer5.appendChild(movieCard);
        });
    }

    document.querySelector('.next-btn5').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > animationMovies.length - 1) {
            currentIndex = 0;
        }
        rotateCarousel5();
    });

    document.querySelector('.prev-btn5').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = animationMovies.length - 1;
        }
        rotateCarousel5();
    });

    rotateCarousel5();
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

        movieCard.addEventListener('click', () => {
            console.log('clickeddd');
        });
        
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

            movieCard.addEventListener('click', () => {
                console.log('clickeddd');
            });
            
            carouselContainer6.appendChild(movieCard);
        });
    }
}