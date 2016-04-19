angular.module('app')
.controller('ShowpageController', ['$scope', '$location', 'httpFactory', function($scope, $location, httpFactory){
  $scope.title = 'test';
  function activate() {
    var id = httpFactory.getCurrentDate();
    httpFactory.getDate(id)
    .then(function(response){
      console.log(response);
      $scope.date = response.data;
    });
  }
  activate();

}]);
