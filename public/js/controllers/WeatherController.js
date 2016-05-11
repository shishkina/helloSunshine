'use strict'
console.log("inside the WeatherController");
	app.controller('WeatherController', WeatherController);

	function 	WeatherController ($log, $scope, $rootScope, $window, $stateParams, $state, $http, $auth,$timeout){

		// navigator.geolocation.getCurrentPosition(function (position){
		//
		// 	var lat = position.coords.latitude;
	  //   var lng = position.coords.longitude;
		// 	console.log(lat + lng + " latitude and longitude");
	  //   $scope.$apply(function(){
	  //     $scope.lat = lat;
	  //     $scope.lng = lng;
		//
		// 	var mapOptions = {
		// 		zoom: 12,
		// 		center: new google.maps.LatLng(lat, lng),
		// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// 	};
		// 	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//
		// 	var createMarker = function(lat, lng){
		//   		var marker = new google.maps.Marker({
	  //   			map: $scope.map,
	  //   			position: new google.maps.LatLng(lat, lng),
		// 			});
		// 	}
		// 	createMarker($scope.lat, $scope.lng);
		// 	});
			$scope.getCurrentWeather = function(){
					navigator.geolocation.getCurrentPosition(function (position){

						var lat = position.coords.latitude;
				    var lng = position.coords.longitude;
						console.log(position.coords);
						console.log(lat + " latitude and longitude" +lng  );

				      $rootScope.lat = lat;
				      $rootScope.lng = lng;
})
        console.log("in getCurrentWeather");
$timeout(function(){
				console.log(self.weatherInfo + " self.weatherInfo controller coords" +  $rootScope.lat + " : " +  $rootScope.lng);
var tmpUrl = '/currentWeather/' + $rootScope.lat + '/' + $rootScope.lng;
					$http({
						method: 'GET',
						url: tmpUrl,
					}).then(function(info){
						$rootScope.weather = info.data;
							// console.log("this is Weather info: " + JSON.stringify(info.data) );
							$state.go('currentWeather',{lat: $rootScope.lat,lng: $rootScope.lng  })
					});
},5000);
			};
			// getCurrentWeather($scope.lat, $scope.lng);

	// $scope.getCurrentWeather = function(){
	// 	navigator.geolocation.getCurrentPosition(function (position){
	//
	// 		var lat = position.coords.latitude;
	//     var lng = position.coords.longitude;
	// 		console.log(lat + lng + " latitude and longitude");
	//       $scope.lat = lat;
	//       $scope.lng = lng;
	//
	//     console.log("in getCurrentWeather");
	// 		console.log(self.weatherInfo + " self.weatherInfo controller coords");
	// 	$http({
	// 		method: 'GET',
	// 		url:'/currentWeather/' + $scope.lat + '/' + $scope.lng,
	// 	}).then(function(info){
	// 			console.log("this is Weather info: " + info.data);
	// 			$state.go('currentWeather');
	// 	});
	//
	// 	var mapOptions = {
	// 		zoom: 12,
	// 		center: new google.maps.LatLng(lat, lng),
	// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 	};
	// 	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//
	// 	var createMarker = function(lat, lng){
	//   		var marker = new google.maps.Marker({
  //   			map: $scope.map,
  //   			position: new google.maps.LatLng(lat, lng),
	// 			});
	// 			console.log("I made a map");
	// 	}
	//
	// 	createMarker($scope.lat, $scope.lng);
	// 	debugger;
	// 	});
	// }
}
