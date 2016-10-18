var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'rentocracy'
});

connection.connect();

// test that database is working
connection.query('SELECT * FROM users', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('rows: ', rows);
});
 
connection.end();

module.exports = connection;