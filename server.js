var express = require('express');

// create app
var app = express();

// tell which folder to use
app.use(express.static('public'));

// start server (port, function)
app.listen(3000, function() {
  console.log('express server is running on port 3000');
});