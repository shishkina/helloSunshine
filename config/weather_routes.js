var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var WeatherController = require('../controllers/weather.js');
var request = require('request');

const WEATHER_KEY = process.env.WEATHER_KEY;

router.get('/:lat/:lng', function(req, res){
    var latitude = req.params.lat;
    var longitude = req.params.lng;
    var weatherUrl = 'https://api.forecast.io/forecast/' + WEATHER_KEY + '/' + latitude + ',' + longitude;
    WeatherController.getWeather(weatherUrl, function(body){
      res.send(JSON.parse(body));
    });
  });

  module.exports = router;
