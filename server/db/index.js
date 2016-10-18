var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'rentocracy'
});

connection.connect();

module.exports = connection;