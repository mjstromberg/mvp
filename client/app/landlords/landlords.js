angular.module('rentocracy.landlords', [])

.controller('LandlordsController', ['$scope', function($scope) {
  $scope.submit = function() {
    $.ajax({
      url: '/api/landlords',
      type: 'GET',
      async: false,
      success: function(data, status, jqXHR) {
        console.log('client data: ', data);
      },
      error: function(jqXHR, status, error) {
        console.log('client error: ', error);
      }
    })

  }
}]);