var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var port = 8000;

// middleware
app.use(express.static(__dirname + '/../client'));
app.use(favicon(__dirname + '/../client/assets/favicon.ico')); // not routed properly

// add routes here
app.get('/', function(req, res) {
  res.send('/index.html');
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;