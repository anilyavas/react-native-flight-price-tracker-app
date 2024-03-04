const express = require('express');
const app = express();
const port = 3000;
const { scraperFlights } = require('./scraper');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/search', (req, res) => {
  const { from, to, departDate, returnDate } = req.query;
  if (!from || !to || !departDate || !returnDate) {
    res.status(400).send('Inputs are missing');
    return;
  }
  // calls scraper
  try {
    const data = scraperFlights(from, to, departDate, returnDate);
    res.send([{ price: '123' }]);
  } catch (e) {
    res.status(500).send('Failed to scrape!');
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
