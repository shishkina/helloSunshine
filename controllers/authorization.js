'use strict'

var User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var secret = 'Sunshine';

function makeToken(req, res){
  User.findOne({
    email: req.body.email,
  }, function(err, user){
    if(err){
      res.send({message: 'something went wrong'})
    }
    if(!user){
      res.send({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    } else if(user) {
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch){
          //assign the token
          var token = jwt.sign(user, secret);

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
function verifyToken(req, res, next){
      //check header or url parameters or post parameters for token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
      //decode token
      if(token){
        //verifies secret
        jwt.verify(token, secret, function(err, decoded){
          if(err){
            return res.json({
              success: false,
              message: 'Failed to authenticate token.'
            });
          } else {
            //if everything os ok, save to request for use in other routes
            req.decoded = decoded;
            next();
          }
        });
      } else {
        // if there is no token, return an error
          return res.status(403).send({
            success: false,
            message: 'No token provided.'
          });
        }
}

module.exports = {
  makeToken: makeToken,
  verifyToken: verifyToken,
}
