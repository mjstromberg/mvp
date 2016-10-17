angular.module('rentocracy.landlords', [])

.controller('LandlordsController', ['$scope', function($scope) {
  $scope.check = 'check';
  console.log($scope.check);
}]);