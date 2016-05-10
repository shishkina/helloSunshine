var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var bcrypt = require('bcrypt');
var userRoutes = require('./config/user_routes.js');
var authorizationRoutes = require('./config/authorization_routes.js');
var weatherRoutes = require('./config/weather_routes.js');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('./models/user.js');
var app = express();

//use morgan in dev environment for debugging, console output
app.use(morgan('dev'));

//user bodyParser for JSON objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 3000));
//use public folder for static pages
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.render('public/index.html');
});

//authentication handling
var secret = 'Sunshine';
app.use('/authenticate', authorizationRoutes);
app.use('/user', userRoutes);
app.use('/currentWeather', weatherRoutes);

app.use(function(req, res, next){
  //check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req. headers['x-access-token'];
  //decode token
  if(token){
    //verifies secret
    jwt.verify(token, 'Sunshine', function(err, decoded){
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
});
//connect to the database
mongoose.connect('mongodb://localhost/weatherApp', function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully connected to db: weatherApp");
  }
});
//console output to verify connection with the server
app.listen(app.get('port'), function(){
  console.log("App is listening on port ", app.get('port'));
})
