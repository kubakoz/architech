'use strict';

angular.module('myApp.openWeatherMap.openWeatherMap-filter', [])

.filter('dateDisplay', ['$filter', function($filter) {

  return function(utc) {

  	var dt = new Date(utc * 1000);
  	var today = new Date();
  	var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  	if (dt.toDateString() == today.toDateString()){

  		dt = 'Today' + $filter('date')(dt, ' h:00 a');

  	}else if(dt.toDateString() == tomorrow.toDateString()){

  		dt = 'Tomorrow' + $filter('date')(dt, ' h:00 a');
  		
  	} 
  	else{
  		dt = $filter('date')(dt, 'EEEE h:00 a');
  	}
    return dt;
  };

}]);
