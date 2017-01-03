var express = require('express');

//app init

var app = express();
app.use(express.static('public'));

app.listen(3000, function (){
  console.log("express server is running on port 3000")
});
