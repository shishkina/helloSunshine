var User = require('../models/user.js');

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
function updateUser(req, res){
  //assign necessary parameters
  var id = req.params.id;
  var email = req.params.email;
  var password = req.params.password;
  //find user by id
  User.findOneAndUpdate(
    {_id: id},
    {$set: {email: email, password: password}},
    {new:true}, function(err,doc){
      if(err){
        console.log("User Not updated. Error: " + err);
      }
      console.log(doc);
    })
}
function getUser(req, res){
  var id = req.params.id;

  User.findById({_id: id}, function(err, user){
    if(err){
      res.json({msg:"Could not find user"})
    }
  })
}
