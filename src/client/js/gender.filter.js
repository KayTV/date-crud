(function() {
  'use strict';

  angular.module('app')
  .filter('genderfilter', genderfilter);

  function genderfilter(){
    return function(input, gender){
      var out = [];

      angular.forEach(input, function(value){
        if(value.gender === gender){
          out.push(value);
        }
      });
      return out;
    }
  }

}());
