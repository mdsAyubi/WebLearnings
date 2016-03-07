var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger);
//app.use(express.responseTime());
app.use(express.static(__dirname));

app.use(function(req,res,next){
	if(req.url === '/MOO_COW'){
		res.end('MOOOO!!!');
		return;
	}
	next();

});


app.all("/user[s]?/:username",function(req,res){
	res.end("You asked for "+ req.params.username + "\n");
});

app.get('*', function(req,res){
	res.end('Hello World..express!!!');

});

app.listen(8080);