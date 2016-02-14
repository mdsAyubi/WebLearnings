function Vehicle(){

}

Vehicle.prototype.make = "Undefined";
Vehicle.prototype.model = "Undefined";
Vehicle.prototype.wheels = "Undefined";

Vehicle.prototype.move = function(){
	console.log("moving...");
}

//var v = new Vehicle();
//v.move();
//console.log(v.make + " "+v.model + " "+v.wheels);

function Car(){

}

Car.prototype = new Vehicle();
Car.prototype.__proto__ = Vehicle.prototype;
Car.prototype.wheels = 4;

Car.prototype.move = function(){
	console.log("Moving car...with " + this.wheels + " wheels");
}

var c = new Car();
//c.wheels = 4;
c.move();



