window.onload = function () {
  const userId = localStorage.getItem("user_id");

  if (userId) {
    // Fetching movies based on bookmarked genres
    fetch(
      `http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/server/fetch_bookmarked.php?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const recommendedSection = document.getElementById("recommended");

        // Loop through the movie data and create movie cards
        data.forEach((movie) => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");

          movieCard.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}">
                <div class="movie-info">
                  <h4>${movie.title}</h4>
                  <p><strong>Release Year:</strong> ${movie.release_year}</p>
                  <p><strong>Duration:</strong> ${movie.duration}</p>
                </div>
              `;

          // Append the movie card to the recommended section
          recommendedSection.appendChild(movieCard);
        });
      })
      .catch((error) =>
        console.error("Error fetching recommended movies:", error)
      );
  } else {
    console.log("User ID not found in localStorage.");
  }
};
