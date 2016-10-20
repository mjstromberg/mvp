angular.module('rentocracy.rentals', [])

.controller('RentalsController', ['$scope', function($scope) {
  $scope.isFeatured = true;
  $scope.profileTitle = $scope.isFeatured ? 'Featured' : 'Search Results';

  $scope.submit = function(rental) {
    console.log('rental.stars: ', rental.stars);
    $scope.isFeatured = Object.keys(rental).length === 0;
    $scope.profileTitle = $scope.isFeatured ? 'Featured' : 'Search Results';
    
    $.ajax({
      url: '/api/rentals',
      type: 'GET',
      data: {stars: rental.stars},
      async: false,
      success: function(data, status, jqXHR) {
        console.log('client data: ', data);
        $scope.currentData = data;
      },
      error: function(jqXHR, status, error) {
        console.log('client error: ', error);
      }
    });
  };

  $scope.featuredProfile = {
    street: '123 Not Real Street',
    city: 'Fakeville',
    state: 'CA',
    zipcode: 12345,
    stars: 3,
    review_count: 1,    
    username: 'satisfied_renter9000',
    review_text: 'This place is in a nice neighborhood and is close to transit.',
    date_start: '2010-05-01',
    date_end: '2011-05-01',
    stars_landlord: 3
  };

  $scope.currentData = $scope.isFeatured ?
    [$scope.featuredProfile] :
    $scope.searchResults;
}]);