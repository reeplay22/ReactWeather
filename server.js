var express = require('express');
var app = express();
//app init
//var path = require('path')

//var port = 3000;
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function (){
  console.log('Express server is running on port ' + PORT);
});
