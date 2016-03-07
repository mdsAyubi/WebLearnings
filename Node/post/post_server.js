var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser);
app.post('*', function(req,res){
	res.end(JSON.stringify(req.body)+'\n');
});

app.listen(8080);
