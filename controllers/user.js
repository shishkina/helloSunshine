var User = require('../models/user.js');

function getUsers(req, res){
  User.find(function(err, users){
    if(err){
      console.log("There are no users in the database");
    }
    res.json({
      users: users
    });
  })
};

function createUser(req, res){
  console.log(re.body);
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

function getUser(req, res){
  var id = req.params.id;

  User.findById({_id: id}, function(err, user){
    if(err){
      res.json({msg:"Could not find user"})
    }
  })
}
