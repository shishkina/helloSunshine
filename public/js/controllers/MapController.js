'use strict'
console.log("inside the MapController");
	app.controller('MapController', function ($scope, $window){
  navigator.geolocation.getCurrentPosition(function (position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $scope.$apply(function(){
      $scope.lat = lat;
      $scope.lng = lng;
    })
  });
});
