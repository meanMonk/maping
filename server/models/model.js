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
