var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var WeatherController = require('../controllers/weather.js');
var request = require('request');

const WEATHER_KEY = process.env.WEATHER_KEY;

router.get('/:lat/:lng', function(req, res){
    var latitude = req.params.lat;
    var longitude = req.params.lng;
    console.log("get/weather before the api call" );
    console.log("this is key " + WEATHER_KEY);
    var weatherUrl = 'https://api.forecast.io/forecast/' + WEATHER_KEY + '/' + latitude + ',' + longitude;
    console.log("right after the api call");
    WeatherController.getWeather(weatherUrl, function(body){
      console.log("inside the WeatherController, before JSON");
      console.log(body + " body");
      res.send(JSON.parse(body));
    });
  });

  module.exports = router;
