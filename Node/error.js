try{
	setTimeout(function(){
		throw new Error("Danger!");
	},2000);
}catch(e){
	console.log("I caught thee");
}