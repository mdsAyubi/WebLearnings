var fs = require('fs');

fs.open('test1.txt', 'r', function(err,handle){

	if(err === null){
		var f = handle;
		var b = new Buffer(100000);

		fs.read(f,b,0,100000,null, function(err,bytes_read){
			if(err === null){
				console.log(b.toString("utf8",0,bytes_read));
			}else{
				console.log("Error on read"+err.code+" "+err.message);
			}
			fs.close(f);
		});
	}else{
		console.log("Error on open file: "+err.code+" "+err.message);
	}

});