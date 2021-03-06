var express = require('express');
var app = express();
var options = {
  root: __dirname + '/public/',
}
var errorFunc = function(err) {
  if (err) console.log('err')
}

app.get('/', function(req, res){
  console.log(req.url)
  res.sendFile('index.html', options, errorFunc);
});

app.get('/*', function(req, res){
  console.log(req.url)
  res.sendFile(req.url, options, errorFunc);
});
app.listen(3000);
