'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

function getWeather(url, cb){
  request(url, function(error, response, body){
    if(error){
      response.status(400);
    }
      cb(body);
  });
}
module.exports = {
  getWeather: getWeather,
}
