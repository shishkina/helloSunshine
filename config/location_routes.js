
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var LocationController = require('../controllers/location.js');
var request = require('request');

router.route('/:searchLocation')
  .get(function(req, res){
    var searchLocation = req.params.searchLocation;
    var decode = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + searchLocation + '&key=AIzaSyARFlpAtezjAvQvEbDyIu6XJ2BwLdIFhyo';
    LocationController.getLocation(decode, function(body){
      res.json(JSON.parse(body));
    });
  });
  
module.exports = router;
