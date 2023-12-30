## Lexical vs Dynamic Scope

-   JavaScript uses lexical scoping for variables: they are accessible within the region they are defined.

-   `this` keyword in JavaScript has dynamic scope: its value is determined by how the function is called.

-   In regular functions, `this` refers to the calling context. If no context is specified, `this` defaults to the global object (`window` in browsers).

-   Arrow functions do not have their own `this`. They inherit `this` from the parent scope.

## Key Takeaways

-   Understanding the difference between lexical and dynamic scope is crucial for understanding how variables and `this` are resolved in JavaScript.

-   Regular functions and arrow functions handle `this` differently. Be mindful of this when choosing function types.

## Best Practices

-   Use arrow functions when you want `this` to be bound to the parent scope.

-   Be careful when using `this` in a method that you plan to pass as a callback, as its value might not be what you expect.

-   If you need to access the object a method was called on, you might need to use a regular function instead of an arrow function.

```js
const obj = {
	name: "Billy",
	sing() {
		console.log("a", this);
		var anotherFunc = function () {
			console.log("b", this);
		};
		anotherFunc();
	},
};
obj.sing();

// a {name: "Billy", sing: ƒ}
// b Window {…}
```

```js
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  }
};
obj.sing();

// a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}
Okay, last example to really solidify our knowledge of this.

var b = {
  name: "jay",
  say() {
    console.log(this);
  }
};

var c = {
  name: "jay",
  say() {
    return function() {
      console.log(this);
    };
  }
};

var d = {
  name: "jay",
  say() {
    return () => console.log(this);
  }
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
```
