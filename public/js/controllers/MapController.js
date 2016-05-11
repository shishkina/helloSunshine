'use strict'
console.log("inside the MapController");
	app.controller('MapController', MapController);

function 	MapController ($scope, $rootScope, $window, $timeout){
	navigator.geolocation.getCurrentPosition(function (position){
console.log("in map controller" +  $rootScope.lat + " : " +  $rootScope.lng);
		var lat = position.coords.latitude;
    var lng = position.coords.longitude;
		// console.log(lat + lng + " latitude and longitude");
$scope.temperature = $rootScope.weather.currently.temperature;
      $rootScope.lat = lat;
      $rootScope.lng = lng;

		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(lat, lng),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var createMarker = function(lat, lng){
	  		var marker = new google.maps.Marker({
    			map: $scope.map,
    			position: new google.maps.LatLng(lat, lng),
				});
		}
		createMarker($scope.lat, $scope.lng);

	});
}
