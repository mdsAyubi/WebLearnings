var http=require('http');
var s = http.createServer(function(req,res){
	console.log("Got a request!!!");
	res.end("Hey, thanks for calling!");
});
s.listen(8080);