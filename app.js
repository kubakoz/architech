'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.viewForecast',
  'myApp.version',
  'myApp.openWeatherMap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/viewForecast'});
}]);
