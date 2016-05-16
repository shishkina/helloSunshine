'use strict'
console.log("inside the MapController");
app.controller('MapController', MapController);

function 	MapController($scope, $rootScope, $window){
	var self = this
	self.getCoordinates = function(){

	}
	$scope.getCurrentLocation = function(){
		navigator.geolocation.getCurrentPosition(function (position){
			var lat = position.coords.latitude;
    	var lng = position.coords.longitude;
      	$rootScope.lat = lat;
      	$rootScope.lng = lng;
				console.log("Map controller rootScope.lat " + $rootScope.lat);

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
}
