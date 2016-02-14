var http = require('http'),
	fs = require('fs'),
	url = require('url');



function handle_incoming_requets(req,res){
	console.log("Incoming request "+req.method+" "+req.url);

	req.parsed_url = url.parse(req.url,true);
	var core_url = req.parsed_url.pathname;


	if(core_url == '/albums.json'){
		handle_load_albums(req,res);
	}else if(core_url.substr(0,7) == '/albums' && core_url.substr(core_url.length-5) == '.json'){
		handle_get_albums();
	}else{
		res.writeHead(404,{'Content-Type':'application/json'});
		res.end(JSON.stringify({error:'unknown resource'}));

	}


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
	var core_url = req.parsed_url.pathname;
	var album_name = core_url.substr(7,core_url.length-12);

	var page = parseInt(req.parsed_url.query.page);
	var page_size = parseInt(req.parsed_url.query.page_size);

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




var s = http.createServer(handle_incoming_requets);
s.listen(8080);