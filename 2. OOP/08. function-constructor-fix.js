function Person(name, age) {
	if (!(this instanceof arguments.callee)) {  // if dont have new fix it  
		return new Person(name, age);
	}
	this.name = name;
	this.age = age;
}


var p1 = new Person('With new', 12);
var p3 = new Person('With new 2', 12);
var p2 = Person('Withoud new', 13);
console.log(p1);

console.log(p2);


console.log(p3);

/* The arguments.callee property contains the currently executing function. 
callee is a property of the arguments object.
This is useful when the name of the function is unknown, 
such as within a function expression with no name */
