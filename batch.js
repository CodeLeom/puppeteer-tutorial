import puppeteer from "puppeteer"

 const browser = await puppeteer.launch({
	headless: false
	});
 const page = await browser.newPage();

//set array of different urls
const  urlArr  =  [
    'https://blog.apify.com',  
    'https://blog.apify.com/puppeteer-submit-forms',  
    'https://blog.apify.com/puppeteer-web-scraping-tutorial'
];
for(var i = 0; i < urlArr.length; i++){
    const site_url = urlArr[i];
// Open URL in current page
    await  page.goto(site_url, {
    waitUntil: 'networkidle0'
});
// Capture screenshot
await page.screenshot({ path: `images/screenshot_${i+1}.png`, fullPage: true });
}

//close the browser
await browser.close()