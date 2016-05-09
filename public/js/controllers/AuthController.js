'use strict'
console.log("Inside the AuthController");
	app.controller('AuthController', AuthController);


function AuthController($http, $auth, $state) {
  var self = this;
  self.login = function(){
    var credentials = {
      email: self.email,
      password: self.password
    }
		// $auth.authenticate(credentials);
    $auth.login(credentials).then(function(data){
      console.log($auth.isAuthenticated());
      var user = data.data.user;
      console.log(self);
      // debugger;
      console.log(typeof(data));
      console.log(user._id + " id being passed");
      console.log(user.email + " email");
      $state.go('user', {"id": user._id});

    });
  },
		self.update = function(data){
				var user = data.data.user;
		},
    self.logout = function(){
      $auth.logout()
           .then(function(){
             console.log("Logging from logout");
						 $auth.removeToken()
             $state.go('login');
      });
    }
			self.signup = function(){
					$auth.signup({
					email: self.email,
				  password: self.password
				}).then(function(response) {
				  console.log(response.data);

					$state.go('login')
				});
			}

    self.isAuthenticated = function() {
        return $auth.isAuthenticated();
      };
  }
