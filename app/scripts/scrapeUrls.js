const puppeteer = require("puppeteer-extra");
const puppeteerStealth = require("puppeteer-extra-plugin-stealth");
const fs = require("fs");

// using stealth plugin to bypass bot detection
puppeteer.use(puppeteerStealth());

async function scrapeURLs() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // setting the URL of the sitemap
  const sitemapURL = "https://www.pathe.fr/sitemap.xml";

  // navigating to the sitemap URL
  await page.goto(sitemapURL, { waitUntil: "domcontentloaded" });

  // extracting the URLs from the sitemap
  const urls = await page.evaluate(() => {
    const locs = Array.from(document.querySelectorAll("url loc"));
    return locs.map((loc) => loc.textContent).slice(0, 50);
  });

  console.log(urls);

  // saving the URLs to a file
  fs.writeFileSync("app/assets/scraped/urls.txt", urls.join("\n"), "utf8");

  await browser.close();
}

scrapeURLs();
