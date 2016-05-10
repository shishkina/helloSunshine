'use strict'
console.log("inside the WeatherController");
	app.controller('WeatherController', WeatherController);

function  WeatherController($scope, $stateParams, $state, $http, $auth){
			var self = this;
			console.log(self + " self weather controller");
			self.coords = {
			lat: $stateParams.latitude,
			lng: $stateParams.longitude,
			}
			console.log(self + "Front Weather Controller");
      if($auth.isAuthenticated) {
        console.log('this is excecuting');
        getCurrentWeather();
      }else{
        $state.go('login');
        console.log('login page excecuting');
      }
			$scope.getCurrentWeather = function(){
        console.log("in getCurrentWeather");
					$http({
						method: 'GET',
						url:'/currentWeather/' + self.coords.lat + '/' + self.coords.lng,
					}).then(function(info){
							console.log("this is Weather info: " + info);
							// state.go('currentWeather');
					})
			};

}
