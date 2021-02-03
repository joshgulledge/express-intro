const express = require('express');
const { quoteList } = require('./modules/quotes');
// console.log(express);
const quotes = require('./modules/quotes');

// create our app
const app = express();

const port = 3000;

// INCANTATION:
// share any files inside the "public" folder

app.use(express.static('server/public'));

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ^all the above is the same

// listen for network request
app.listen(port, function () {
  // when server is ready call this function
  console.log('I am listening...', port);
});

app.get('/quotes', function (req, res) {
  console.log('GET request for quotes', req);
  res.send(quotes.getNextQuote());
});

/*
Get all the quotes
return array with all quotes
*/

app.get('/allTheQuotes', function (req, res) {
  console.log('get all the quotes');

  res.send(quotes.quoteList);
});

app.post('/quotes', function (req, res) {
  // body is already on req
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);

  // add quote to data
  quotes.addQuote(quote);
  // respond
  res.sendStatus(200);
});
