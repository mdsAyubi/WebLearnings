var fs = require('fs');

function FileObject(){
	this.filename = null;

	this.exists = function(callback){
		console.log("attempting to open"+this.filename);
		var self = this;
		fs.open(this.filename , 'r', function(err, handle){
			if(err){
				console.log(self.filename + "does not exist");
				console.log(this);
				callback(false);
			}else{
				console.log(self.filename +"does exist");
				callback(true);
				fs.close(handle);
			}
		});
	};
}

var fo = new FileObject();
fo.filename = 'efssggwg';

fo.exists(function(does_it_exist){
	console.log('results from exists...'+ does_it_exist);
});