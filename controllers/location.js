'use strict'

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');

function getLocation(url, cb){
  request(url, function(error, response, body){
    if(error){
      response.status(400);
      console.log(error);
    }
      cb(body);
  });
}
module.exports = {
  getLocation: getLocation,
}
