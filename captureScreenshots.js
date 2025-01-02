const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const outputDir = "./public/images/projects"; // Directory to save screenshots
const urls = [
  { name: "mcnsolutions", url: "https://www.mcnsolutions.com/" },
  { name: "simpleshowing", url: "https://www.simpleshowing.com/" },
  { name: "reclub", url: "https://reclub.co/" },
  { name: "matterhorn", url: "https://matterhorndigital.nz/" },
];

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const captureScreenshots = async () => {
  const browser = await puppeteer.launch(); // Launch Puppeteer
  const page = await browser.newPage(); // Open a new page

  for (const { name, url } of urls) {
    try {
      console.log(`Capturing screenshot for: ${url}`);
      await page.setViewport({ width: 1280, height: 720 }); // Set resolution
      await page.goto(url, { waitUntil: "networkidle2" }); // Navigate to the URL
      const outputPath = path.join(outputDir, `${name}.png`); // File path
      await page.screenshot({ path: outputPath });
      console.log(`Saved screenshot to: ${outputPath}`);
    } catch (error) {
      console.error(`Failed to capture screenshot for ${url}:`, error);
    }
  }

  await browser.close(); // Close Puppeteer
};

captureScreenshots();
