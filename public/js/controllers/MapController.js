'use strict'
console.log("inside the MapController");
	app.controller('MapController', MapController);

function 	MapController ($scope, $window){
  navigator.geolocation.getCurrentPosition(function (position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    $scope.$apply(function(){
      $scope.lat = lat;
      $scope.lng = lng;

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
	});

// var initialLocation;
// var siberia = new google.maps.LatLng(60, 105);
// var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
// var browserSupportFlag =  new Boolean();
//
// function initialize() {
//   var myOptions = {
//     zoom: 6,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("map"), myOptions);
//
//   // Try W3C Geolocation (Preferred)
//   if(navigator.geolocation) {
//     browserSupportFlag = true;
//     navigator.geolocation.getCurrentPosition(function(position) {
//       initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
//       map.setCenter(initialLocation);
//     }, function() {
//       handleNoGeolocation(browserSupportFlag);
//     });
//   }
//   // Browser doesn't support Geolocation
//   else {
//     browserSupportFlag = false;
//     handleNoGeolocation(browserSupportFlag);
//   }
//
//   function handleNoGeolocation(errorFlag) {
//     if (errorFlag == true) {
//       alert("Geolocation service failed.");
//       initialLocation = newyork;
//     } else {
//       alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
//       initialLocation = siberia;
//     }
//     map.setCenter(initialLocation);
//   }
// }


}
