/**
 * Created by kashetws on 30/04/17.
 */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('api works');
});

<<<<<<< HEAD

var indexRoute = {
  router : router,
  auth : require('./auth'),
  processor : require('./dataprocessor')
=======
router.get('/index.html', function(req, res){
  res.send('<h1>Hello application comming soon..........<h1>');
});

var indexRoute = {
  router : router,
  auth : require('./auth')
>>>>>>> 045b63c36738f786508e9e5dae6a1f173a7db155
};

module.exports = indexRoute;

