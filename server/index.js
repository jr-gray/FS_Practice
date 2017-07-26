// require necessary imports
const express = require('express');
const parser = require('body-parser');

const app = express();
const port = 3000;

//middleware
app.use(parser.urlencoded({ extended: true }));

// have express instance listen in on a PORT
app.listen(port, (err) => {
  if (err) {
    console.log('ERRRrrorororororrrrr');
  } else {
    console.log('listening on port ', port)
  }
})