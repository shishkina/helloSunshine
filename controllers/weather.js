'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

function getCurrentWeather(url, cb){
  request(url, function(error, response, body){
    if(error){
      response.status(400);
      console.log(error);
    }
      cb(body);
  });
}
module.exports = {
  getCurrentWeather: getCurrentWeather,
}
