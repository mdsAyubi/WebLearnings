var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	express = require('express');

var app = express();

app.get('/albums.json',handle_load_albums);
app.get('albums/:album_name.json',handle_get_albums);
app.get('/content/:filename',serve_static_content);

app.get('*',function(req,res){
	res.writeHead(404,{'Content-Type':'application/json'});
	res.end(JSON.stringify({error:'unknown resource'}));
});


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
	var fn = req.params.filename;
	var rs = fs.createReadStream('content/'+fn);

	console.log(fn);

	res.writeHead(200,{'Content-Type':get_content_type(fn)});

	rs.on('readable', function(){
		console.log('Reading...');
		var d = rs.read();
		console.log('Reading done...');
		if(typeof d == 'string'){
			res.write(d);

		}else if (typeof d == 'object' && d instanceof Buffer){
			if( get_content_type(fn).substr(0,6) == 'image/')
				res.write(d);
			else
				res.write(d.toString('utf8'));
		}
	});

	res.on('end', function(){
		res.end();
	});

	res.on('error', function(){
		res.writeHead(404,{'Content-Type':'application/json'});
		res.end(JSON.stringify({error:'resource not found',message:'whats that'}));
	});
}

function handle_load_albums(req,res){
	load_albums_list(function(err,albums){

		if(err === null){
			res.writeHead(200,{'Content-Type':'application/json'});
			res.end(JSON.stringify({error:null,data:albums})+"\n");
		}else{
			res.writeHead(200,{'Content-Type':'application/json'});
			res.end(JSON.stringify({error:'file_error',message:err.message})+"\n");
		}

	});
}


function load_albums_list(callback){
	var file_list = fs.readdir('albums/',function(err,file_list){

		if(err){
			callback(err);
			return;
		}
		var dirs_only = [];
		(function iterator(i){
			if(i >= file_list.length){
				callback(null,dirs_only);
				return;
			}
			fs.stat("albums/"+file_list[i], function(err, stats){
				if(err){
					callback(err);
					return;
				}
				if(stats.isDirectory())
					dirs_only.push(file_list[i]);

				iterator(i+1); //call the next
			});
		})(0);
	});
}

function handle_get_albums(req,res){

	var album_name = req.params.album_name;

	var page = req.query.page;
	var page_size = req.query.page_size;

	if(isNaN(page)||page <= 0 ) page = 0;
	if(isNaN(page_size) || page_size <= 0) page_size = 250;



	load_albums(album_name,page,page_size,function(err,photos){

		if(err === null){
			res.writeHead(200,{'Content-Type':'application/json'});
			res.end(JSON.stringify({error:null,data:{album:{album_name:album_name,photos:photos}}})+"\n");
		}else{
			res.writeHead(200,{'Content-Type':'application/json'});
			res.end(JSON.stringify({error:'file_error',message:err.message})+"\n");
		}

	});
}

function load_albums(album_name,page,page_size,callback){
	var file_list = fs.readdir('albums/'+album_name,function(err,file_list){

		if(err){
			callback(err);
			return;
		}
		var files_only = [];
		(function iterator(i){
			if(i >= file_list.length){
				var phots = files_only.splice(page*page_size,page_size);
				callback(null,files_only);
				return;
			}
			fs.stat('albums/'+album_name+'/'+file_list[i], function(err, stats){
				if(err){
					callback(err);
					return;
				}
				if(stats.isFile())
					files_only.push(file_list[i]);

				iterator(i+1); //call the next
			});
		})(0);
	});
}

app.listen(8080);