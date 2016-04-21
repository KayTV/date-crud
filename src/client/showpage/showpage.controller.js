angular.module('app')
.controller('ShowpageController', ['$scope', '$location', 'httpFactory', function($scope, $location, httpFactory){
  $scope.title = 'test';
  $scope.show = false;
  $scope.save = false;

  function activate() {
    var id = httpFactory.getCurrentDate();
    httpFactory.getDate(id)
    .then(function(response){
      console.log(response);
      $scope.date = response.data.data;
      console.log($scope.date);
    });
  }
  activate();

  $scope.saveDate = function() {
    httpFactory.saveDate($scope.date)
    .then(function(response){
      console.log('response', response);
    })
  }

  $scope.dislikeDate = function() {
    $location.path('/');
  }

}]);
