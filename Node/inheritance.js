function Shape(){
	
}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

Shape.prototype.move = function(x,y){
		this.X = x;
		this.Y = y;
	}

Shape.prototype.distance_from_origin = function(){
		return Math.sqrt(this.X*this.X + this.Y*this.Y);
	}

Shape.prototype.area = function(){
	throw new Error("Need a 2d form!");
}

function Square(){

}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width = 0;

Square.prototype.area = function(){
	return this.Width * this.Width;
}



var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin());

var sq = new Square();
sq.move();
sq.Width = 15;
console.log(sq.area());
