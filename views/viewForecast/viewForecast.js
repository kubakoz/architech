'use strict';

angular.module('myApp.viewForecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewForecast', {
    templateUrl: 'views/viewForecast/viewForecast.html',
    controller: 'ViewForecastCtrl'
  });
}])

.controller('ViewForecastCtrl', ['$scope', 'openWeather', function($scope, openWeather) {


	$scope.getForcast = function(city){

		openWeather.getWeatherData(city).then(function(result){

			$scope.averageTemp = openWeather.getAverageTemp(result.data.list);
			$scope.weatherData = result.data;

		})
	}

}]);