const puppeteer = require("puppeteer");
const fs = require("fs");

// scrapping data from a single url
async function scrapeWithPuppeteer(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  // array to hold the data
  const scrapedData = [];

  try {
    // navigating to the url
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // collecting data using 2 methods '$$' $ '$eval'
    const films = await page.$$(".hero-film__content");
    for (const film of films) {
      const title = await film.$eval("h1", (h1) => h1.textContent.trim());

      const description = await film.$eval("p.hero-film__desc", (p) =>
        p.textContent.trim()
      );

      const releaseYearText = await film.$eval(
        "p.ft-default.c-white-70.mb-0.mb-md-0",
        (p) => p.textContent.trim().replace("Sortie : ", "")
      );
      const releaseYear = releaseYearText.match(/\d{4}/)[0];

      const duration = await film.$eval(
        ".hero-film__subtitle p.ft-default.ft-500.mb-0:nth-of-type(1)",
        (p) => p.textContent.trim()
      );

      const genre = await film.$eval(
        ".hero-film__subtitle p.ft-default.ft-500.mb-0:nth-of-type(2)",
        (p) => p.textContent.trim()
      );

      const imageUrl = await film.$eval(
        "img.hero-film__poster",
        (img) => img.src
      );

      // pushing to the array
      scrapedData.push({
        title,
        description,
        releaseYear,
        genre,
        duration,
        imageUrl,
      });
    }

    console.log(`Data from ${url} has been collected`);
  } catch (error) {
    console.error(`Failed to scrape ${url}:`, error);
  } finally {
    await browser.close();
  }

  return scrapedData;
}

// reading urls from 'url.txt' and returning them as an array
function readURLsFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent.split("\n"); // new line
}

// looping through the urls and scraping
async function main() {
    const urls = readURLsFromFile("urls.txt");

    let allData = []; 
  
    for (const url of urls) {
      const data = await scrapeWithPuppeteer(url);
      allData = allData.concat(data); 
    }
  
    // writing scraped data into a json file
    fs.writeFileSync("filmsData.json", JSON.stringify(allData, null, 2));
  
    console.log("All data has been saved to filmsData.json");
  }
  
  main();