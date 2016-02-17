var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');



function handle_incoming_requets(req,res){
	console.log("Incoming request "+req.method+" "+req.url);

	req.parsed_url = url.parse(req.url,true);
	var core_url = req.parsed_url.pathname;

	console.log(core_url);

	if(core_url.substr(0,9) == '/content/'){
		console.log('Handling contents...');
		serve_static_content(req,res);
	}
}

function get_content_type(filename){
	var ext = path.extname(filename).toLowerCase();

	switch(ext){
		case '.jpg':case '.jpeg': return "image/jpeg";
		case '.gif': return 'image/gif';
		case 'png': return 'image/png';
		case '.js': return 'image/js';
		case 'css': return 'text/css';
		case '.html': return 'text/html';

		default: return 'text/plain';
	}
}


function serve_static_content(req,res){
	var fn = req.parsed_url.pathname.substr(9);
	var rs = fs.createReadStream('content/'+fn);
	var ct = get_content_type(fn);

	res.on('error', function(){
		res.writeHead(404,{'Content-Type':'application/json'});
		res.end(JSON.stringify({error:'resource not found',message:'whats that'}));
	});
	

	res.writeHead(200,{'Content-Type':ct});

	rs.pipe(res); //read from the rs stream and send it to response stream

}








var s = http.createServer(handle_incoming_requets);
s.listen(8080);