import puppeteer from "puppeteer";

  // Launch a new browser instance
  const browser = await puppeteer.launch({ 
    headless: false 
});

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://blog.apify.com');

  // Wait for a few seconds
  await page.waitForTimeout(3000);

  // Close the browser
  await browser.close();