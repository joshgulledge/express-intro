const express = require('express');
// console.log(express);

// create our app
const app = express();

const port = 3000;

// INCANTATION:
// share any files inside the "public" folder

app.use(express.static('server/public'));

// listen for network request
app.listen(port, function () {
  // when server is ready call this function
  console.log('I am listening...', port);
});
