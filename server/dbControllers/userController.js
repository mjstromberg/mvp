var db = require('../db/index.js');

var findLandlordByStars = function findLandlordByStars(stars) {
  var query = 'SELECT Landlords.first_name, \
                      Landlords.last_name, \
                      Landlords.stars, \
                      Landlords.review_count, \
                      Users.username, \
                      Reviews.review_text \
              FROM Reviews \
              INNER JOIN Landlords \
              ON Reviews.landlord_id = Landlords.id \
              AND Reviews.stars_landlord >= ' + stars + ' \
              INNER JOIN Users \
              ON Reviews.user_id = Users.id';

  db.query(query, function(err, rows, fields) {
    if (err) { console.log('Server error: ', err); }

    return rows;
  });
};

var findAllLandlords = function findAllLandlords() {
  var query = 'SELECT * FROM Landlords';

  db.query(query, function(err, rows, fields) {
    if (err) { console.log('Server error: ', err); }

    return rows;
  });
};

module.exports = {
  findAllLandlords,
  findLandlordByStars
};
