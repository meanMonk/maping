/**
 * Created by kashetws on 30/04/17.
 */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('api works');
});


var indexRoute = {
  router : router,
  auth : require('./auth'),
  processor : require('./dataprocessor')
};

module.exports = indexRoute;

