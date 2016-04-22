angular.module('app')
.controller('ProfileController', ['$scope', '$route', 'httpFactory', function($scope, $route, httpFactory){
  $scope.title = 'Profile';

  function activate() {
    httpFactory.getProfile()
      .then(function(response){
        console.log(response);
        $scope.dates = response.data;
      });
  };
  activate();

  $scope.deleteDateProfile = function(id) {
    httpFactory.deleteDateProfile(id)
    .then(function(response){
      console.log('deleted date');
      $route.reload();
    })
  }


}]);
