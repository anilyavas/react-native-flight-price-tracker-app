const puppeteer = require('puppeteer-core');
const { openDevtools } = require('./utils');

const SBR_WS_ENDPOINT =
  'wss://brd-customer-hl_c6db08c4-zone-flightpricetracker:qw1g9zcrws5r@brd.superproxy.io:9222';

// Example url

async function main() {
  console.log('Connecting to Scraping Browser...');
  const url = `https://www.skyscanner.net/transport/flights/${from}/${to}/${departDate}/${returnDate}/`;

  const browser = await puppeteer.connect({
    browserWSEndpoint: SBR_WS_ENDPOINT,
  });
  try {
    const page = await browser.newPage();
    console.log('Connected! Navigating to ', url);

    // open devtools
    const client = await page.target().createCDPSession();
    await openDevtools(page, client);

    await page.goto(url);
    // CAPTCHA handling: If you're expecting a CAPTCHA on the target page, use the following code snippet to check the status of Scraping Browser's automatic CAPTCHA solver
    // const client = await page.createCDPSession();
    // console.log('Waiting captcha to solve...');
    // const { status } = await client.send('Captcha.waitForSolve', {
    //     detectTimeout: 10000,
    // });
    // console.log('Captcha solve status:', status);
    console.log('Navigated! Scraping page content...');
    const html = await page.content();
    console.log(html);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.stack || err);
  process.exit(1);
});
