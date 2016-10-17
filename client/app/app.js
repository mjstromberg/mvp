angular.module('rentocracy', [
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/landlords', {
      template: 'landlords/landlords.html',
      controller: 'LandlordsController'
    })
    .when('/rentals', {
      template: 'rentals/rentals.html',
      controller: 'RentalsController'
    })
    .otherwise('/');
});