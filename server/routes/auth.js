/**
 * Created by kashetws on 01/05/17.
 */
const Model  = require('../models/model').userModel;
const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
  res.send('auth api works');
});

router.get('/authenticate', function(req, res){
  var email = "mapiful@clone.com";
  Model.findOne({email: email},function(err, users){
    if(err){
      res.status(404).send(err);
    }else{
      res.status(200).send(users);
    }
  })
});

router.post('/authenticate', function(req, res){
  if(req.body){
    var username = req.body.username;
    var password = req.body.password;
    Model.findOne({ userName: username,password: password },function(err, user){
      if(!user){
        res.status(404).send("no user found with such user name");
      }else{
        res.status(200).send(user);
      }
    })
  }
});

module.exports = router;

