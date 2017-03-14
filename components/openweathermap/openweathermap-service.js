
	'use strict';

	angular.module('myApp.openWeatherMap')
		.factory('openWeather', ['$http', '$sce', 'openWeatherMapInfo', openWeather]);

	function openWeather($http, $sce, openWeatherMapInfo) {

		//let 'o' be the factory object
		var o = {};

		o.weatherApiInfo = openWeatherMapInfo;

		o.getAverageTemp = function(resultList){

			var sum = 0;

			for(var i = 0 ; i < resultList.length; i++){

				sum += resultList[i].main.temp;

			}

			return (sum/resultList.length);

		}

		o.getWeatherData = function (city) {

			var url =  this.weatherApiInfo.api.forcast;

			$sce.trustAsResourceUrl(url);

			var params = {
				q 			: city,
				units 		: 'metric',
				APPID 		: this.weatherApiInfo.apikey,
				callback 	:'JSON_CALLBACK'
			}
			
			var promise = $http.jsonp(url, {
							
				jsonpCallbackParam: 'callback',
				params: params, 
				cache: true
						
			}).success(function(response){

				return response.data;

			}).error(function(e){

				console.log(e);

			});

			return promise;

		}
		return o;

	}
