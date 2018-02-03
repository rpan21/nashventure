'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
    var request = require('request');
var count=0;
var https = require('https');



exports.read_a_task = function(req, res) {
//  var  url = 'http://graph.facebook.com/517267866/?fields=picture'
var url = req.params.urlID;

request(url, (error, response, body)=> {
    //console.log("Got a response: ", response)
    
    //res.send(res.json(response));
  if (!error && null!=response && response.statusCode === 200) {
    //const urlResponse = JSON.parse(body)
    //console.log("Got a response: ", urlResponse)
      console.log("Good URL");
      res.send("Good URL");
  } else {
    console.log("Got an error: ", error, ", status code: ", response.statusCode)
    count=count+1;
    
      if(count<3){
      exports.read_a_task(req,res);
  }else
      {
          res.send("Bad URL"+count);
      }
  }
});
};


