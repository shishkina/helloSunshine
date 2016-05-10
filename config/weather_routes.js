var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var WeatherController = require('../controllers/weather.js');
var request = require('request');


router
  .get('/:lat/:lng', function(req, res){
    var latitude = req.params.lat;
    var longitude = req.params.lng;
    console.log('received lattitude ' + latitude + ' longitude ' + longitude);
    var weatherUrl = 'https://api.forecast.io/forecast/25754e91869bd12b673bf2e223fc76c6/' + latitude + ',' + longitude;

    getCurrentWeather(weatherUrl, function(body){
      res.json(JSON.parse(body));
    });
  });

  function getCurrentWeather(url, cb){
    request(url, function(error, response, body){
      if(error){
        response.status(400);
        console.log(error);
      }
        cb(body);
    });
  }

  module.exports = router;
