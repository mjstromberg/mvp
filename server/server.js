var express = require('express');
var app = express();

// add routes here
app.get('/', function(req, res) {
  res.send('homepage');
});

app.listen(8000);

module.exports = app;