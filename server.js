var express = require('express');

// create app
var app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// tell which folder to use
app.use(express.static('public'));

// start server (port, function)
app.listen(PORT, function() {
  console.log('express server is running on port ' + PORT);
});