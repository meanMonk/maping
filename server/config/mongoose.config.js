/**
 * Created by kashetws on 01/05/17.
 */
"use strict";
var mongoose = require('mongoose');

module.exports = function(config){
  var dbURI = config.dev.db;

  mongoose.connect(dbURI);

  //Connect to the db
  /*mongoose.connect(db,function(err, res){
   if(err){
   console.log("failed to connect to the " + db);
   }else{
   console.log("Connected to the " + db);
   }
   });*/

  // CONNECTION EVENTS
  mongoose.connection.on('connected', function() {
    console.log('DataBase connected to ' + dbURI);
  });

  mongoose.connection.on('error', function(err) {
    console.log('DataBase connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('DataBase disconnected');
  });
};

