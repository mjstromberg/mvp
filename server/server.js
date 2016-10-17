var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var port = 8000;

// middleware
app.use(favicon(__dirname + '/assets/favicon.ico'));

// add routes here
app.get('/', function(req, res) {
  res.send('homepage');
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;