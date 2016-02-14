var http = require('http');

function handle_incoming_requets(req,res){
	 console.log("Incoming request"+ req.method + " "+req.url);

	 var json_data = "";

	 req.on("readable", function(){
	 	var d = req.read();
	 	if(typeof d == 'string'){
	 		json_data += d;
	 	}else if (typeof d == 'object' && d instanceof Buffer){
	 		json_data += d.toString('utf8');
	 	}
	 });

	 re.on("end", function(){
	 	var out = "";
	 	if(!json_data){
	 		out = "No JSON data!!!";
	 	}else{
	 		var json;
	 		try{
	 			json = JSON.parse(json_data);
	 		}catch(e){
	 			console.log("Could not parse json data");
	 		}
	 		if(!json){
	 			out = "Invalid json data";
	 		}else{
	 			out = "Valid JSON data"+json_data;
	 		}


	 	}
	 	res.end(out);
	 });



}



var s = http.createServer(handle_incoming_requets);
s.listen(8080);