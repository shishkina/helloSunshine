'use strict'
console.log('inside the UserController');
app.controller('UserController', UserController);

function UserController ($http, $auth, $state, $stateParams, $rootScope, $scope){
      var self = this;
			self.search = undefined;

      var userId = $stateParams.id;
      if($auth.isAuthenticated) {
        getUser();
      } else {
        $state.go('login');
      }
    	function getUser(){
          $http({
            url: '/user/' + userId,
            method: 'GET',
          }).then(function(data){
            console.log(data + ' this is data');
						self.user = data.data.user;
          });
					return self;
      }
			//still not able to add searches to user profile.
			function updateUser(){
				if(self.search){
				$http({
					method: 'PATCH',
					url: '/user/' + userId,
					data: {newSearch: self.search},
					headers: {'Content-Type':'application/json'},
				}).then( function(data) {
		        var queries = data.data.user.searches;
		        var newSearch = queries[queries.length - 1];
						return newSearch;

			});
		}
	}
}
