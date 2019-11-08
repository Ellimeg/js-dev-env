var express = require('express');
var path = require('path');
// to open files in browser
var open = require('open');

var port = 3000;
// create instance of express
var app = express();

// tell express which routes it should handle
// for now tell it any requests to the root shuld be handled by the function taking a req and resp
app.get('/', function(req, res){
  // use path to join current dir (given by special variable __dirname) to src item
  //res.sendFile(path.join(__dirname, '../src/index.html'))

  // 01. Demo call to 3rd party js lib lodash:
  res.sendFile(path.join(__dirname, '../src/index.html'))

});

// after defining routing tell express to listern on defined port .
app.listen(port, function(err){
  if(err){
    //chuck it on console
    console.log(err);
  }
  else{
    // open up website
    open('http://localhost:' + port);
  }
});
/* at this point typing .\buildScripts\srcServer.js in the terminal
a browser window will also open with the same message:
//--------------------------------------
PS E:\repos\github\ellimeg\js-dev-env> node .\buildScripts\srcServer.js
Error: ENOENT: no such file or directory, stat 'E:\repos\github\ellimeg\js-dev-env\src\index.html'

// type ctrl C to kill process

//--------------------------------------
*/


