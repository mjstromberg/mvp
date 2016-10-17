var rentocracy = angular.module('rentocracy', [
  'ngRoute'
]);

rentocracy.config(function($routeProvider) {
  $routeProvider
    .when('/landlords', {
      template: 'landlords/landlords.html',
      controller: 'landlordsCtrl'
    })
    .otherwise('/');
});