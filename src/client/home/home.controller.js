angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Home';

  function activate() {
    httpFactory.getDate()
      .then(function(response){
        console.log(response);
        $scope.dates = response.data.data;
      });
  };
  activate();

  $scope.setCurrentDate = function(id) {
    httpFactory.setCurrentDate(id)
      console.log(id);
      // $scope.successMessage = 'Updated ' + $scope.movies[index].title;
  };

}]);
