angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Channels of Love';

  function activate() {
    httpFactory.getDates()
      .then(function(response){
        console.log(response);
        $scope.dates = response.data.data;
        $scope.genders = $scope.dates.map(function(date){
          return date.gender;
        }).filter(function(type, index, array){
          return array.indexOf(type)===index;
        })
        $scope.cities = $scope.dates.map(function(date){
          return date.address.city;
        }).filter(function(type, index, array){
          return array.indexOf(type)===index;
        })
      });
  };
  activate();

  $scope.setCurrentDate = function(id) {
    httpFactory.setCurrentDate(id)
      console.log(id);
  };

}]);
