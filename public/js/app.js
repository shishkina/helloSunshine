console.log("inside app.js");
var app = angular
								.module('WeatherApp', ['ui.router', 'satellizer', 'ui.bootstrap'])
  							.config(['$stateProvider', '$urlRouterProvider', '$authProvider', MainRouter]);


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
					url: '/users/:id',
					templateUrl: 'home.html',
					controller: 'UserController as user'
				})
				.state('update', {
					url:'/users/:id',
					templateUrl: 'update.html'
				});
}
