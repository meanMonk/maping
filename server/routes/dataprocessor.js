/**
 * Created by kashetws on 18/05/17.
 */
const Model  = require('../models/model').dataModel;
const express = require('express');
const router = express.Router();
const uuidV4 = require('uuid/v4');

function postTograph(imageValue, uid) {
    var img = imageValue;
    var base64Data = img.replace(/^data:image\/png;base64,/, "");
    var uploadImagePath ="./server/uploads/"+uid+".png";
    require("fs").writeFile(uploadImagePath, base64Data, 'base64', function(err) {
      console.log(err);
    });
    console.log("image Uploaded to the path", uploadImagePath);
}

router.get('/', function(req, res){

  res.send('data processing api works');

});

router.post('/mapImage', function(req, res){
  if(req.body){
    var imageUrl = req.body.imageBlob;
    var uuId = uuidV4();
    postTograph(imageUrl, uuId);
    res.send({value : uuId});
  }
});


module.exports = router;
