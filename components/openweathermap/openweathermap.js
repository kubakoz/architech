'use strict';

angular.module('myApp.openWeatherMap', [
  'myApp.openWeatherMap.openWeatherMap-filter'
])
.constant('openWeatherMapInfo', {
			'apikey': '2036bd2dd6554e2e2a8a7cafb1bff1f1',
			'apiversion':'2.5',
			'api': {
				'forcast' : 'http://api.openweathermap.org/data/2.5/forecast'
			}
});


