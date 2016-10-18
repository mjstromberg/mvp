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

app.get('/api/landlords', function(req, res) {
  var reqQuery = req.query;
  var query = '';
  console.log('server stars: ', reqQuery.stars);
  if (reqQuery.stars) {
    var query = 'SELECT Landlords.first_name, \
                        Landlords.last_name, \
                        Landlords.stars, \
                        Landlords.review_count, \
                        Users.username, \
                        Reviews.review_text \
                FROM Reviews \
                INNER JOIN Landlords \
                ON Reviews.landlord_id = Landlords.id \
                AND Reviews.stars_landlord >= ' + reqQuery.stars + ' \
                INNER JOIN Users \
                ON Reviews.user_id = Users.id';
  } else {
    query = 'SELECT * FROM Landlords';
  }
  db.query(query, function(err, rows, fields) {
    if (err) {
      console.log('server err: ', err);
    } else {
      console.log('server rows: ', rows);
      res.send(rows);
    }
  });
});

// listen to port
app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;