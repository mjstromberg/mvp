angular.module('rentocracy', [
  'rentocracy.landlords',
  'rentocracy.rentals',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/landlords', {
      templateUrl: 'app/landlords/landlords.html',
      controller: 'LandlordsController'
    })
    .when('/rentals', {
      templateUrl: 'app/rentals/rentals.html',
      controller: 'RentalsController'
    })
    .otherwise('/');
});