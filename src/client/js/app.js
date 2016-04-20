angular.module('app', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .when('/showpage', {
      templateUrl: 'showpage/showpage.html',
      controller: 'ShowpageController'
    })
    .when('/profile', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController'
    })
    .when('/register', {
      templateUrl: 'auth/register/register.html',
      controller: 'RegisterController'
    })
    .when('/login', {
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      controller: 'LogoutController'
    })

    .otherwise({redirectTo: '/'});
  });
