var express = require('express');
var app = express();
var port = 8000;

// add routes here
app.get('/', function(req, res) {
  res.send('homepage');
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;