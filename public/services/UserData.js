'use strict'
app.factory('userData', ['$resource', userDataFactory]);

function userDataFactory($resource){
  var User = $resource('/');

  return {
    getUser: function(){
      return User.get({id:user._id});
    },
    createUser: function(userData){
      return new User(userData).$save();
    },
    deleteUser: function(user){
      return User.delete({id:user._id});
    }
  };
}
