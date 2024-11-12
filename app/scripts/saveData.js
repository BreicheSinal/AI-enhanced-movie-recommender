const BASE_URL =
  "http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender";

fetch(`${BASE_URL}/app/assets/scraped/scrapedData.json`)
  .then((moviesData) => {
    axios
      .post(`${BASE_URL}/server/saveData.php`, moviesData)
      .then((response) => {
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching JSON file:", error);
  });
