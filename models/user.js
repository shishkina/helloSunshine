var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

//defining User model
var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  date: Date,
  searches: []
});

UserSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')){
    return next();
  }
  bcrypt.genSalt(10, function(err, salt){
    if(err){
      console.log(err);
      return next();
    }
    bcrypt.hash(user.password, salt, function(err, hashedPassword){
      if(err){
        console.log(err);
        return next();
      }
      user.password = hashedPassword;
      next();
    })
  })
})
UserSchema.methods.comparePassword = function(userPassword, cb){
  bcrypt.compare(userPassword, this.password, function(err, isMatch){
    if(err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
