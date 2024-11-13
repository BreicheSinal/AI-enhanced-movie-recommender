const carouselContainer = document.querySelector('.carousel');
const carouselContainer2 = document.querySelector('.carousel2');

function renderMovies(movies) {
    //carouselContainer.innerHTML = ''; // Clear existing cards

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
}


// let currentIndex = 0;

// document.querySelector('.next-btn').addEventListener('click', () => {
//     currentIndex++;
//     if (currentIndex > movies.length - 1) {
//         currentIndex = 0;
//     }
//     rotateCarousel();
// });

// document.querySelector('.prev-btn').addEventListener('click', () => {
//     currentIndex--;
//     if (currentIndex < 0) {
//         currentIndex = movies.length - 1;
//     }
//     rotateCarousel();
// });

// function rotateCarousel() {

//     const rotatedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];
    
//     carouselContainer.innerHTML = '';
//     rotatedMovies.forEach(movie => {
//         const movieCard = document.createElement('div');
//         movieCard.classList.add('movie-card');

//         movieCard.innerHTML = `
//             <img src="${movie.image_url}" alt="${movie.title}">
//             <h3>${movie.title}</h3>
//             <p>${movie.genre} | ${movie.duration}</p>
//         `;
        
//         carouselContainer.appendChild(movieCard);
//     });
// }




// function renderNewMovies() {
//   carouselContainer2.innerHTML = ''; // Clear existing cards

//   newMovies.forEach(movie2 => {
//       const movieCard2 = document.createElement('div');
//       movieCard2.classList.add('movie-card');
      
//       movieCard2.innerHTML = `
//           <img src="${movie2.image_url}" alt="${movie2.title}">
//           <h3>${movie2.title}</h3>
//           <p>${movie2.genre} | ${movie2.duration}</p>
//       `;
      
//       carouselContainer2.appendChild(movieCard2);
//   });
// }

// renderNewMovies();


// let currentIndex2 = 0;

// document.querySelector('.next-btn2').addEventListener('click', () => {
//     currentIndex2++;
//     if (currentIndex2 > newMovies.length - 1) {
//         currentIndex2 = 0;
//     }
//     rotateCarousel2();
// });

// document.querySelector('.prev-btn2').addEventListener('click', () => {
//     currentIndex2--;
//     if (currentIndex2 < 0) {
//         currentIndex2 = newMovies.length - 1;
//     }
//     rotateCarousel2();
// });

// function rotateCarousel2() {
//     // Shift the array based on the current index
//     const rotatedMovies = [...newMovies.slice(currentIndex2), ...newMovies.slice(0, currentIndex2)];

//     carouselContainer2.innerHTML = '';
//     rotatedMovies.forEach(movie => {
//         const movieCard = document.createElement('div');
//         movieCard.classList.add('movie-card');

//         movieCard.innerHTML = `
//             <img src="${movie.image_url}" alt="${movie.title}">
//             <h3>${movie.title}</h3>
//             <p>${movie.genre} | ${movie.duration}</p>
//         `;
        
//         carouselContainer2.appendChild(movieCard);
//     });
// }