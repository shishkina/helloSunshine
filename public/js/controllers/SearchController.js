'use strict'
app.controller('SearchController', ['UserController', 'WeatherController', '$http', '$state', SearchController])

function SearchController(){
  var self = this;
  self.search = undefined;

  self.coords = {
    lat: null,
    lng: null,
  }

  self.searchWeather = function() {
    var userId = UserController.getUser()._id

  }

  self.getUser = function() {
    return UserController;
  }

  self.getWeather = function() {
    return WeatherController.getWeather();
  }
}
