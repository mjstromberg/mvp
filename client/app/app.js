var rentocracy = angular.module('rentocracy', [
  'ngRoute'
]);

rentocracy.config(function($routeProvider) {
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