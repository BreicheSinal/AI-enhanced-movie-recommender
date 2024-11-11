

// Static movie data
const movies = [
    {
      title: 'Movie 1',
      description: 'Description of Movie 1',
      release_year: '2021',
      genre: 'Action',
      duration: '120 min',
      image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img3.jpeg'
    },
    {
      title: 'Movie 2',
      description: 'Description of Movie 2',
      release_year: '2022',
      genre: 'Comedy',
      duration: '110 min',
      image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/im4.jpg'
    },
    {
      title: 'Movie 3',
      description: 'Description of Movie 3',
      release_year: '2023',
      genre: 'Drama',
      duration: '130 min',
      image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img1.jpg'
    },
    {
      title: 'Movie 4',
      description: 'Description of Movie 4',
      release_year: '2024',
      genre: 'Horror',
      duration: '115 min',
      image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/im4.jpg'
    },
    {
      title: 'Movie 5',
      description: 'Description of Movie 5',
      release_year: '2020',
      genre: 'Sci-Fi',
      duration: '140 min',
      image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img3.jpeg'
    },
    {
      title: 'Movie 6',
      description: 'Description of Movie 6',
      release_year: '2021',
      genre: 'Action',
      duration: '125 min',
     image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/im4.jpg'
    }
  ];
  
  const newMovies = [
    {
        title: 'New Movie 1',
        description: 'Description of New Movie 1',
        release_year: '2022',
        genre: 'Thriller',
        duration: '110 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img3.jpeg'
    },
    {
        title: 'New Movie 2',
        description: 'Description of New Movie 2',
        release_year: '2023',
        genre: 'Fantasy',
        duration: '100 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img1.jpg'
    },
    {
        title: 'New Movie 2',
        description: 'Description of New Movie 2',
        release_year: '2023',
        genre: 'Fantasy',
        duration: '100 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img3.jpeg'
    },
    {
        title: 'New Movie 2',
        description: 'Description of New Movie 2',
        release_year: '2023',
        genre: 'Fantasy',
        duration: '100 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img1.jpg'
    },
    {
        title: 'New Movie 2',
        description: 'Description of New Movie 2',
        release_year: '2023',
        genre: 'Fantasy',
        duration: '100 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img3.jpeg'
    },
    {
        title: 'New Movie 2',
        description: 'Description of New Movie 2',
        release_year: '2023',
        genre: 'Fantasy',
        duration: '100 min',
        image_url: 'http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app//assets/images/img1.jpg'
    },
  
];

  const carouselContainer = document.querySelector('.carousel');
  const carouselContainer2 = document.querySelector('.carousel2');

function renderMovies() {
    carouselContainer.innerHTML = ''; // Clear existing cards

    movies.forEach(movie => {
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

renderMovies();

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




function renderNewMovies() {
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
}

renderNewMovies();


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