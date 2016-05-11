console.log("inside app.js");
var app = angular
								.module('WeatherApp', ['ui.router', 'satellizer', 'ui.bootstrap'])
  							.config(['$stateProvider', '$urlRouterProvider', '$authProvider', MainRouter])
								.factory('weatherInfo', function Weather(){
										var weather = {};
										return {
											setWeather: function(obj){
												weather = obj;
											},
											getWeather: function(){
												return weather;
											}
										}
									});


function MainRouter(states, router, auth) {
	//Satellizer config specifies which route theJWT should be retrieved from
	auth.loginUrl = '/authenticate';
	//redirect to the auth state if any other states are requested
	router.otherwise('/auth');

//accessing templates through the state
	states
				.state('login',{
					url: '/auth',
					templateUrl: 'login.html',
					controller: 'AuthController as auth'
				})
				.state('signup', {
					url: '/auth/signup',
					templateUrl: 'signup.html',
				})
				.state('user', {
					url: '/user/:id',
					templateUrl: 'home.html',
					controller: 'UserController as user'
				})
				.state('update', {
					url:'/user/:id',
					templateUrl: 'update.html'
				})
				.state('currentWeather',{
					url: '/currentWeather/:lat/:lng',
					templateUrl: 'weather.html',
					controller: 'WeatherController'
				});
}
