import puppeteer from "puppeteer";


  // Launch a headless browser
	  const browser = await puppeteer.launch({ headless: false });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto('https://warehouse-theme-metal.myshopify.com/account/login'); // Replace 'https://warehouse-theme-metal.myshopify.com/account/login' with the actual path to your HTML file.

  // Wait for the form to be visible on the page
  await page.waitForSelector('#customer_login');

  // Fill in the form inputs
  await page.type('input[id*="customer"]', 'demo@username.com');
  await page.type('input[type=password]', 'demo_password');

  // Submit the form by clicking the login button
  await Promise.all([
    // Wait for navigation to complete
    page.waitForNavigation(), 
    // select the button with a distinct class
    page.click('.form__submit.button--full'),
  ]);

  // Verify successful login by checking the URL or page content
  const loggedInUrl = await page.url();
  if (loggedInUrl.includes('challenge')) {
    console.log('Login successful!');
  } else {
    console.log('Login failed!');
  }

  // Close the browser
  await browser.close();
