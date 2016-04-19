angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getDate = function(title) {
    return $http({
      method: 'GET',
      url: 'https://galvanize-student-apis.herokuapp.com/gdating/members'
    });
  };

  return factory;

}]);
