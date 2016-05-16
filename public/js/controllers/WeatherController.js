'use strict'
console.log("inside the WeatherController");
app.controller('WeatherController', WeatherController);

function 	WeatherController($log, $scope, $rootScope, $window, $stateParams, $state, $http, $auth){

			$scope.getWeather = function(){
					navigator.geolocation.getCurrentPosition(function (position){

						var lat = position.coords.latitude;
				    var lng = position.coords.longitude;
						console.log(position.coords);
						console.log(lat + " latitude and longitude" +lng  );

				      $rootScope.lat = lat;
				      $rootScope.lng = lng;
						})

					$http({
						method: 'GET',
						url: '/weather/' + $rootScope.lat + '/' + $rootScope.lng,
						}).then(function(info){
							$rootScope.weather = info.data;
							$state.go('user',{lat: $rootScope.lat, lng: $rootScope.lng});
					});
			};

}
