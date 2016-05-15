var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var WeatherController = require('../controllers/weather.js');
var request = require('request');


router
  .get('/:lat/:lng', function(req, res){
    var latitude = req.params.lat;
    var longitude = req.params.lng;
    console.log('received lattitude ' + latitude + ' longitude ' + longitude);
    var weatherUrl = 'https://api.forecast.io/forecast/25754e91869bd12b673bf2e223fc76c6/' + latitude + ',' + longitude;

    WeatherController.getWeather(weatherUrl, function(body){
      res.json(JSON.parse(body));
    });
  });

  module.exports = router;
