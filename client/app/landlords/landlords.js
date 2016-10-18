angular.module('rentocracy.landlords', [])

.controller('LandlordsController', ['$scope', function($scope) {
  $scope.isFeatured = true;
  $scope.profileTitle = $scope.isFeatured ? 'Featured' : 'Search Results';

  $scope.submit = function(landlord) {
    $scope.isFeatured = Object.keys(landlord).length === 0;
    $scope.profileTitle = $scope.isFeatured ? 'Featured' : 'Search Results';
    
    $.ajax({
      url: '/api/landlords',
      type: 'GET',
      data: landlord.stars,
      async: false,
      success: function(data, status, jqXHR) {
        console.log('client data: ', data);
        $scope.searchResults = data;
      },
      error: function(jqXHR, status, error) {
        console.log('client error: ', error);
      }
    })
  };

  
  $scope.featuredProfile = {
    first_name: 'Fakey',
    last_name: 'McLandlord',
    stars: 3,
    review_count: 1,    
    username: 'satisfied_renter9000',
    review_text: 'Fakey McLandlord is the best!',
    date_start: '2010-05-01',
    date_end: '2011-05-01',
    stars_landlord: 3
  };

  $scope.searchResults = [];

  $scope.currentData = $scope.isFeatured ?
    [$scope.featuredProfile] :
    $scope.searchResults;
}]);