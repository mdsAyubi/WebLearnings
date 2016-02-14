var arrays = require('./arrays.js');

setTimeout(function(){
	console.log('YO YO');
},3000);

function intersect(arr1, arr2, callback){

	var intersect = [];

	var i = 0;

	function sub_compute_intersection(){
		for(var j = 0; j<arr2.length; j++){
			if(arr1[i] == arr2[j]){
				intersect.push(arr2[j]);
				break;
			}
		}

		if( i< arr1.length){
			i++;
			if(i%1000===0)
				console.log(i);
			setImmediate(sub_compute_intersection);
			
		}else{
			callback(intersect);
		}
	}
	sub_compute_intersection();
}

intersect(arr1, arr2,function(result){
	console.log(result.length);
});

function process_step1(param){
	//do some stuff
	console.log("In 1");
	process.nextTick(process_step2);
}

function process_step2(param){
	//do some stuff
	process.nextTick(process_step3);
}
