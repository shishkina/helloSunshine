var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userRoutes = require('./config/user_routes.js');
var authorizationRoutes = require('./config/authorization_routes.js');
var weatherRoutes = require('./config/weather_routes.js');
var locationRoutes = require('./config/location_routes.js');
var mongoose = require('mongoose');
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

app.use('/authenticate', authorizationRoutes);
app.use('/user', userRoutes);
app.use('/weather', weatherRoutes);
app.use('/location', locationRoutes);

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
