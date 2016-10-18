angular.module('rentocracy.rentals', [])

.controller('RentalsController', ['$scope', function($scope) {
  $scope.check = 'check';
  console.log($scope.check);
}]);