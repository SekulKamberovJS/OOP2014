Object.prototype.extend = function (properties) {
  function f() {};
	var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
	};

	f.prototype._super = this; //  super is used to access and call functions on an object's parent
	return new f();
}

var Person = {
	init: function init(name, age) {
		this.name = name;
		this.age = age;
		return this;
	},

	introduce: function introduce() {
		return this.name + ", " + this.age;
	}
};

var Student = Person.extend({
	init: function init(name, age, grade) {
		this._super.init.call(this, name, age)
		
		this.grade = grade;
		return this;
	},

	introduce: function introduce() {
		return Person.introduce.call(this) + ", Grade: " + this.grade;
	}
})

var p = Object.create(Student).init("Pesho", 13, 2);
var a = Object.create(Person).init("Niko", 11);
console.log(p.introduce());
console.log(a.introduce());
console.log(p);
console.log(a);