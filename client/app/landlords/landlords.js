angular.module('rentocracy.landlords', [])

.controller('LandlordsController', ['$scope', function($scope) {
  $scope.submit = function() {
    $.ajax({
      url: '/landlords',
      type: 'GET',
      async: false,
      success: function(data, status, jqXHR) {
        console.log('~~~~~~~~~~~~', data);
      },
      error: function(jqXHR, status, error) {
        console.error(error);
      }
    })

  }
}]);