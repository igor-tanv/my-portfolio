const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const outputDir = "./public/images/projects"; // Directory to save screenshots
const urls = [
  { name: "mcnsolutions", url: "https://www.mcnsolutions.com/" },
  { name: "simpleshowing", url: "https://www.simpleshowing.com/" },
  { name: "reclub", url: "https://reclub.co/" },
  { name: "matterhorn", url: "https://matterhorndigital.nz/" },
  { name: "vhgglobalspirits", url: "https://vhgglobalspirits.com/", hasPopup: true }, 
  { name: "shamrockspirits", url: "https://www.shamrock-spirits.com/", hasPopup: true }
];

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const captureScreenshots = async () => {
  const browser = await puppeteer.launch(); // Launch Puppeteer
  const page = await browser.newPage(); // Open a new page

  for (const { name, url, hasPopup } of urls) {
    try {
      console.log(`Capturing screenshot for: ${url}`);
      await page.setViewport({ width: 1280, height: 720 }); // Set resolution
      await page.goto(url, { waitUntil: "networkidle2" }); // Navigate to the URL

      // Handle age verification popup
      if (hasPopup) {
        try {
          await page.waitForSelector('button', { timeout: 5000 }); // Wait for buttons to appear
          const buttons = await page.$$('button'); // Get all buttons
          if (buttons.length > 0) {
            await buttons[0].click(); // Click the first button (Assuming "Yes" is first)
            await page.waitForTimeout(3000); // Wait for the page to load after click
          }
        } catch (err) {
          console.warn(`No popup detected or couldn't click the button for ${url}`);
        }
      }

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
