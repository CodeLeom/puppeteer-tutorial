// index.js
import puppeteer from "puppeteer";

	(async () => {
  // Launch a headless browser
	  const browser = await puppeteer.launch({ 
	  headless: false 
  });

  // Create new page
  const page = await browser.newPage();

  // Navigate to the login page
// Replace 'the website link' with the actual path to your desired page.
  await page.goto('https://warehouse-theme-metal.myshopify.com/account/register'); 

  // Wait for the form to be visible on the page
  await page.waitForSelector('#create_customer');

  // Fill in the form inputs
  await page.type('#customer\\[first_name\\]', 'john');
  await page.type('#customer\\[last_name\\]', 'doe');
	await page.type('#customer\\[email\\]', 'demo@username.com');
	await page.type('#customer\\[password\\]', '123456');

  // Submit the form by clicking the login button
  await Promise.all([
// Wait for navigation to complete
    page.waitForNavigation(), 
    page.click('.form__submit.button.button--primary.button--full'),
  ]);

  // Verify successful login by checking the URL or page content
  const signUpUrl = await page.url();
  if (signUpUrl.includes('challenge')) {
    console.log('Sign Up successful!');
  } else {
    console.log('Sign Up failed!');
  }

  // Close the browser
  await browser.close();
})();