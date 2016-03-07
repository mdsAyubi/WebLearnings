var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.urlencoded({
  extended: true,
  keepExtenstions:true
}));
app.use(bodyParser.json());
app.post('*', function(req,res){
	console.log('Uploading....');
	res.end(JSON.stringify(req.files)+'\n');
	console.log('Response sent...');
});

app.listen(8080);