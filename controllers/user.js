'use strict'

var User = require('../models/user.js');

function createUser(req, res){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      res.json({
        msg: "Unable to create user"
      })
    }
      res.json(user);
  });
}
function updateUser(req, res){
    var userId = req.params.id;
    var newSearch = req.body.newSearch;

    if (newSearch) {
      User.findByIdAndUpdate(
        userId,
        {$push: {searches: newSearch}},
        {new: true}, function(err, user){
          if(err) res.send({message: error});

          else return res.json(user);
        });
      }
    else {
      res.json({message: "cannot update the searches"});
    }
}

function getUser(req, res){
  var id = req.params.id;

  User.findById({_id: id}, function(err, user){
    if(err){
      res.json({msg:"Could not find user"})
    }
    res.send({user: user});
  });
}
module.exports = {
  createUser: createUser,
  updateUser: updateUser,
  getUser: getUser,
}
