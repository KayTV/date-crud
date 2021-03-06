angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getDates = function(title) {
    return $http({
      method: 'GET',
      url: 'https://galvanize-student-apis.herokuapp.com/gdating/members'
    });
  };

  factory.getDate = function(id) {
    return $http({
      method: 'GET',
      url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/'+id
    });
  };

  factory.getCurrentDate = function() {
      return dateId;
  }

  factory.setCurrentDate = function(id) {
    dateId = id;
    console.log('dateId', dateId);
    return dateId;
  }

  factory.saveDate = function(date) {
    return $http ({
      method: 'POST',
      url: '/date',
      data: {date: date}
    });
  };

  factory.getProfile = function() {
    return $http({
      method: 'GET',
      url: '/profile'
    });
  };

  factory.deleteDateProfile = function(id) {
    return $http({
      method: 'DELETE',
      url: '/delete/'+id
    });
  }

  return factory;

}]);
