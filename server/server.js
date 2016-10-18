var express = require('express');
var db = require('./db/index.js');

var app = express();
var port = 8000;

// middleware
app.use(express.static(__dirname + '/../client'));

// add routes here
app.get('/', function(req, res) {
  res.send('/index.html');
});
app.get('/landlords', function(req, res) {
  db.query('SELECT * FROM Landlords', function(err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log('rows: ', rows);
    }
  });
   
  connection.end();
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;