var express = require('express');
var db = require('./db/index.js');
var userController = require('./dbControllers/userController.js');

var app = express();
var port = 8000;

// middleware
app.use(express.static(__dirname + '/../client'));

// add routes here
app.get('/', function(req, res) {
  res.send('/index.html');
});

app.get('/api/landlords', function(req, res) {
  var reqQuery = req.query;
  var queryResults = reqQuery.stars ?
                     userController.findLandlordsByStars() :
                     userController.findAllLandlords();

  res.send(queryResults);
});

// listen to port
app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;