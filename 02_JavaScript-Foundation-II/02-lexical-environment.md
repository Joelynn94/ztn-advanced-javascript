# Lexical Environment in JavaScript

A lexical environment is the scope or environment where the JavaScript engine is currently reading code. In JavaScript, our lexical scope (available data + variables where the function was defined) determines our available variables, not where the function is called (dynamic scope).

## Variable Environment

Every execution context (or 'running state' of a function) has its own variable environment, which is its local memory (variable and function declarations). Here's an example:

```javascript
function two() {
	var isValid; // isValid is undefined in this execution context.
}

function one() {
	var isValid = true; // this variable will be put into the new execution context. It's its own variable environment
	two(); // New execution context created.
}

var isValid = false; // Global variable is created as undefined. Then during execution, it changes in memory to false.
one(); // New execution context is created on top of the stack.

/* 
   two() isValid = undefined
   one() isValid = true
   global() isValid = false
   ------------------------
   call stack
*/
```

## Lexical Environment Components

A lexical environment consists of two main components:

1. **Environment Record**: A record of all the variables and functions that are currently in scope.

2. **Reference to the Outer Environment**: A reference to the lexical environment of the parent scope, i.e., the scope that corresponds to the code that is lexically surrounding the current function.

## Nested Functions and Lexical Environment

When functions are nested, each function creates its own lexical environment. The outer reference of the inner function's lexical environment points to the lexical environment of the outer function. This forms a chain of lexical environments, all the way up to the global environment, which has no outer environment. This is why variables declared in the global scope can be accessed by functions, but not the other way around.

```javascript
function outer() {
	let x = 1;

	function inner() {
		let y = 2;
		// Here, we have access to both x and y
	}

	// Here, we only have access to x
}
```

## Lexical Environment and Closures

The concept of the lexical environment is crucial for understanding closures. A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has finished execution. This is possible because the function's lexical environment is preserved.

## `[[Scope]]` in JavaScript

In JavaScript, every function has a `[[Scope]]` property, which is a hidden internal property. This property is created when the function is defined, and it's a reference to the lexical environment in which the function was defined.

The `[[Scope]]` property is used to resolve non-local variables in nested functions. When a function is invoked, a new execution context is created, and its outer environment reference is set to the `[[Scope]]` of the function.

Here's an example:

```javascript
var x = 1;

function outer() {
	var y = 2;

	function inner() {
		var z = 3;
		console.log(x + y + z); // Outputs: 6
	}

	inner();
}

outer();
```

In this example, the inner function has access to variables x, y, and z. The variable x is accessed from the global scope, y from the outer function's scope, and z from its own scope. This is possible because of the [[Scope]] property, which creates a chain of references to outer environments, allowing access to non-local variables.
