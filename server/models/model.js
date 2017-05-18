/**
 * Created by kashetws on 01/05/17.
 */
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id : String,
  firstName : String,
  lastName : String,
  email : String,
  password : String,
  userName : String
<<<<<<< HEAD
});

var userModel = mongoose.model('admin', userSchema, 'admin');

var dataSchema = new Schema({
  _id : String,
  firstName : String,
  lastName : String,
  email : String,
  password : String,
  userName : String
});

var dataModel = mongoose.model('userDetails', dataSchema, 'userDetails');

module.exports.userModel = userModel;
module.exports.dataModel = dataModel;
=======

});

var userModel = mongoose.model('user', userSchema, 'user');

module.exports.userModel = userModel;
>>>>>>> 045b63c36738f786508e9e5dae6a1f173a7db155
