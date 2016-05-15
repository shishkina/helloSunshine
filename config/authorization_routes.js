var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var authorizationController = require('../controllers/authorization.js');
var userController = require('../controllers/user.js');
var User = require('../models/user.js');

//authentication handling
var secret = 'Sunshine';
router.post('/', authorizationController.makeToken);
router.post('/signup', userController.createUser); 
// function(req, res) {
//   User.findOne({ email: req.body.email }, function(err, existingUser) {
//     if (existingUser) {
//       return res.status(409).send({ message: 'Email is already taken' });
//     }
//     var user = new User({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     user.save(function(err) {
//       if (err) {
//         res.status(500).send({ message: err.message });
//       }
//       res.json({user: user});
//     });
//   });
// });
router.use(function(req, res, next){
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
  })


module.exports = router;
