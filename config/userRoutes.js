var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    bodyParser = require('body-parser'),
    userController = require('../controllers/user.js');
//route to post to authentication
router.post('/auth/signup', function(req, res){
  console.log(req.body);
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      res.json({
        msg: "Unable to create user"
      })
    }
      console.log(user + "saving user");
      res.send({user:user});
  });
});
//get user
router.get('/:id', function(req, res){
  var id = req.params.id;
  console.log(("id from the route: " + id));
  User.findById({_id:id}, function(err, user){
    if(err){
      console.log(err);
    }
    console.log("user: " + user);
    res.send({user:user});
  });
});

router.patch('/:id', function(req, res){
  var id = req.params.id;
  console.log("id from the patch route " + id);
  User.findById({_id:id}, function(err, user){
    if(err){
      console.log(err);
    }
    if(req.body.email) {
    user.email = req.body.email;
      }
    if(req.body.password) {
      user.password = req.body.password;
    }
    user.save(function(err){
      if(err){
        console.log(err);
      }
      res.send({user:user});
      console.log("updated user: " + user);
    });
  });
});


module.exports = router;
