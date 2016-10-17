angular.module('rentocracy', [
  'rentocracy.landlords',
  // 'rentocracy.rentals',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/landlords', {
      template: 'app/landlords/landlords.html',
      controller: 'LandlordsController'
    })
    .when('/rentals', {
      template: 'app/rentals/rentals.html',
      controller: 'RentalsController'
    })
    .otherwise('/');
});