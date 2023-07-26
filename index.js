const puppeteer = require('puppeteer');

	(async () => {
  // Launch a headless browser
	  const browser = await puppeteer.launch({ 
	  headless: false 
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto('http://127.0.0.1:5500/index.html'); // Replace 'http://127.0.0.1:5500/index.html' with the actual path to your HTML file.

  // Wait for the form to be visible on the page
  await page.waitForSelector('#login-form');

  // Fill in the form inputs
  await page.type('#uname', 'demo_username');
  await page.type('#pwd', 'demo_password');

  // Submit the form by clicking the login button
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    page.click('#login'),
  ]);

  // Verify successful login by checking the URL or page content
  const loggedInUrl = await page.url();
  if (loggedInUrl.includes('dashboard')) {
    console.log('Login successful!');
  } else {
    console.log('Login failed!');
  }

  // Close the browser
  await browser.close();
})();