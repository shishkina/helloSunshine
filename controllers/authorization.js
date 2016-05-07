'use strict'

var User = require('../models/user.js'),
    jwt = require('jsonwebtoken'),
    secret = 'Sunshine';

function makeToken(req, res){
  //check the credentials first

  User.findOne({
    username: req.body.username
  }, function(err, user){
    console.log(user);
    if(err){
      console.log(err);
    }
    if(!user){
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
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
            token: token
          });
        } else {
            res.send({
              success: false,
              message: 'Authentication failed.Wrong password.'
            });
        }
      });
    }
  });
}

module.exports = {
  makeToken: makeToken
}
