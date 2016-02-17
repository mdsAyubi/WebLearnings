var fs = require('fs'),
	async = require('async');

function load_file_content(path, callback){

	var f;
	async.waterfall([

		function(cb){
			fs.open(path,'r',cb);
		},

		function(handle,cb){
			f=handle;
			fs.fstat(f,cb);
		},

		function(stats,cb){
			if(stats.isFile()){
				var b = new Buffer(10000);
				fs.read(f,b,0,10000,null,cb);
			}else{
				cb(make_error("not a file","cant read it"));
			}
		},

		function(bytes_read,buffer,cb){
			fs.close(f,function(err){
				if(err){
					callback(err);
				}else{
					callback(null,buffer.toString('utf8',0,bytes_read));
				}
			});
		}
		],
		function(err,results){

	});
}

load_file_content('test.txt', function(err, contents){
	if(err){
		console.log(err);
	}else{
		console.log(contents);
	}
});