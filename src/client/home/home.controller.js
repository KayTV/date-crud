angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Channels of Love';

  function activate() {
    httpFactory.getDates()
      .then(function(response){
        console.log(response);
        $scope.dates = response.data.data;
      });
  };
  activate();

  $scope.setCurrentDate = function(id) {
    httpFactory.setCurrentDate(id)
      console.log(id);
  };

}]);
