var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    bodyParser = require('body-parser'),
    userController = require('../controllers/user.js');

//get all users and create new user
router.route('/')
      .get(function(req, res){
        User.find().exec(function(err, users){
          res.send(users);
        });
      })
      .post(function(req, res){
        var user = new User(req.body);
        user.save(function(err){
          if(err){
            console.log(err);
          } else {
            console.log("User successfully saved.");
          }
        })
      })


module.exports = router;
