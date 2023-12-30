const a = function () {
	console.log(this);

	const b = function () {
		console.log(this);

		const c = {
			hi: function () {
				console.log(this);
			},
		};
		c.hi();
	};
	b();
};

a();

const obj = {
	name: "Billy",
	sing() {
		console.log("a", this);
		var anotherFunc = () => {
			console.log("b", this);
		};
		return anotherFunc.bind(this);
	},
};

obj.sing()();
// obj.sing()();

// Okay, last example to really solidify our knowledge of this.

const obj2 = {
	name: "Billy",
	sing() {
		console.log("a", this);
		var anotherFunc = () => {
			console.log("b", this);
		};
		anotherFunc();
	},
};
obj2.sing();

// a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}

var b = {
	name: "jay",
	say() {
		console.log(this);
	},
};

var c = {
	name: "jay",
	say() {
		return function () {
			console.log(this);
		};
	},
};

var d = {
	name: "jay",
	say() {
		return () => console.log(this);
	},
};

b.say(); // b {name: 'jay', say()...}
// b called the function
c.say(); // function() {console.log(this)}
// returned a function that gets called later
c.say()(); // Window {...}
// c.say() gets the function and the Window runs it
d.say(); // () => console.log(this)
// returned the arrow function
d.say()(); // d {name: 'jay', say()...}
// arrow function does not rebind this and inherits this from parent
