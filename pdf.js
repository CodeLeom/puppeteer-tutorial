import puppeteer from "puppeteer"

 const browser = await puppeteer.launch({
	headless: false
	});
 const page = await browser.newPage();
 await page.goto('https://blog.apify.com');
  
 //generate pdf code
// await page.pdf({ path: 'page.pdf' });

//format pdf options
await page.pdf({
    path: 'formatted.pdf',
    format: 'A4',
    margin: { top: '40px', right: '20px', bottom: '40px', left: '20px' },
  });

//close the browser
await browser.close()
