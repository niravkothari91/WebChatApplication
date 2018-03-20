var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('<h1>Chat Application!!!!!</h1>');
});

var server = app.listen(3000, function(req, res) {
  console.log('Server Started! Listening on port 3000');
});
