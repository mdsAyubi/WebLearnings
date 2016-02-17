var express = require('express');
var app = express();

app.all("/user[s]?/:username",function(req,res){
	res.end("You asked for "+ req.params.username + "\n");
});

app.get('*', function(req,res){
	res.end('Hello World..express!!!');

});

app.listen(8080);