'use strict'

var User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var secret = 'Sunshine';

function makeToken(req, res){
  //check the credentials first
  User.findOne({
    email: req.body.email,
  }, function(err, user){
    console.log(user);
    if(err){
      console.log(err);
    }
    if(!user){
      res.send({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    } else if(user) {
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch){
          console.log("print user from 'comparePassword': " + user);
          //assign the token
          var token = jwt.sign(user, secret);
          //debugging
          console.log("token sent: " + token);
          console.log("User being passed to token " + user);

          res.send({
            user: user,
            token: token,
          });
        } else {
            res.send({
              success: false,
              message: 'Authentication failed.Wrong password.',
            });
        }
      });
    }
  });
}

module.exports = {
  makeToken: makeToken
}
