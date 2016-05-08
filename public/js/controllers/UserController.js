'use strict'
console.log("inside the UserController");
	app.controller('UserController', UserController);


function UserController($http, $auth, $state, $stateParams){
      var self = this;
		 	self.updateOne = {};
      // self.all = [];
      var userId = $stateParams.user;
      if($auth.isAuthenticated) {
        console.log("this is excecuting");
        getUser();
      }else{
        $state.go('login');
        console.log("login page excecuting");
      }
      function getUser(){
        //this is working
        console.log("Logging from inside getUser");
          $http({
            url: "/" + userId,
            method: "GET"
          }).then(function(data){
            console.log("this is user " + self.user);
            self.user = data.data.user;
            // console.log("self.user.data.user " + self.user.data.user);
          });
      }
			function updateUser(){
				console.log("in update User now");
				$http({
					method: 'PATCH',
					url: "/" + userId,
					data: self.updateOne,
					headers: {'Content-Type':'application/json'}
				}).then( function(data) {
						//assuming you need data.data ...
					self.user = data.data.user;
      	$state.go('user', {user: user._id});
				})
			}
  }
