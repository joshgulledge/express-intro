const express = require('express');
// console.log(express);

// create our app
const app = express();

const port = 3000;

// listen for network request
app.listen(port, function () {
  // when server is ready call this function
  console.log('I am listening...', port);
});
