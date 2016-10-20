angular.module('rentocracy', [
  'rentocracy.homepage',
  'rentocracy.landlords',
  'rentocracy.rentals',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController'
    })
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