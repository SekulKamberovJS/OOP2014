function Rect(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rect.prototype = {
	calcArea: function () {
		return this.width * this.height;
	}
};

var calculateArea = function () {
	// What is this?
	return this.width * this.height;
}

var rect = new Rect(50, 55, 15, 10);

// This doesn't make closure don't have nested functions
var rectCalcArea = rect.calcArea; 

rect.calcArea(); // 150
var sechko = rect.calcArea();
sechko //150

console.log(rectCalcArea());   // NaN
console.log(calculateArea()); // NaN