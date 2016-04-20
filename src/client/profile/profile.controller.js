angular.module('app')
.controller('ProfileController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Profile';

  function activate() {
    httpFactory.getProfile()
      .then(function(response){
        console.log(response);
        $scope.dates = response.data;
      });
  };
  activate();


}]);
