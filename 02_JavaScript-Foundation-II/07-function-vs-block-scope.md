## Function Scope vs Block Scope

In JavaScript, the scope of a variable defines its accessibility or visibility in the code. There are two types of scopes: function scope and block scope.

### Function Scope

In function scope, variables are only accessible within the function where they are declared. If you try to access them outside of the function, you'll get a `ReferenceError`.

```js
function testScope() {
	var inFunction = "visible";
}

console.log(inFunction); // Outputs: ReferenceError: inFunction is not defined
```

## Block Scope

Block scope, introduced in ES6 with let and const, confines variables to the block in which they are declared. They are not accessible outside of that block.

```js
if (true) {
	let inBlock = "visible";
}

console.log(inBlock); // Outputs: ReferenceError: inBlock is not defined
```

## Key Differences

-   **`var`**: Variables declared with `var` are function-scoped, meaning they are only accessible within the function they are declared in.

-   **`let` and `const`**: Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block they are declared in.

Understanding the difference between function scope and block scope is crucial for managing variable visibility and avoiding potential bugs in your code.

Understanding the difference between function scope and block scope is crucial for managing variable visibility and avoiding potential bugs in your code.
