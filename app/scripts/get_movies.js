let moviesArray = [];

fetch('http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/get_movies.php')
    .then(response => response.json())
    .then(movies => {
        console.log('Fetched Movies:', movies);


        moviesArray = movies;

        // Log the movies array to the console
        console.log(moviesArray)

        const moviesContainer = document.getElementById("movies-container");

        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            const bookmark = document.createElement('span');
            const ratingStars = document.createElement('span');
            bookmark.setAttribute('title','Bookmark');

            movieElement.innerHTML=`
            <p>${movie.title}</p>
            <p>${movie.description}</p>
            <p>${movie.release_year}</p>
            <p>${movie.genre}</p>
            <p>${movie.duration}</p>
            `
            bookmark.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
            `;

            for(let i=1; i<=5; i++){
                const star = document.createElement('span');
                star.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                </svg>`
                star.id=`star-${movie.id}-${i}`;
                ratingStars.appendChild(star);
            }

            movieElement.appendChild(ratingStars);
            movieElement.appendChild(bookmark);
            moviesContainer.appendChild(movieElement);
            
            checkBookmarkStatus(bookmark,movie);
            checkRatingStatus(movie);
            calculateRating(movie).then(averageRating=>{
                console.log('Hehe',averageRating);
                const ratingSpan = document.createElement('span');
                ratingSpan.innerText = `Rating: ${averageRating}`;
                movieElement.appendChild(ratingSpan);
            });

            bookmark.addEventListener('click',()=>toggleBookmark(bookmark, movie));

            ratingStars.addEventListener('click', (event) => {
                //the star id is passed as e.g. star-1-5, so just get the last number which is the rate value
                const rateValue = event.target.parentElement.id.split('-').pop();

                addRating(rateValue,movie);
            });
        });
    });
    