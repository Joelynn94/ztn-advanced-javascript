## Scope Chain

In JavaScript, each execution context (global or function) is connected to its outer environment via the "scope chain". This chain is used to resolve variable references. Functions can access variables from their own scope, their parent's scope, and the global scope, but not from any child scopes. When a variable is referenced, the search starts from the current scope and moves up the chain until the variable is found or the global scope is reached, at which point a ReferenceError is thrown if the variable is still not found.

```js
var globalVar = "global";

function outer() {
  var outerVar = "outer";

  function inner() {
    var innerVar = "inner";

    // All variables are accessible in inner function
    console.log(innerVar); // Outputs: 'inner'
    console.log(outerVar); // Outputs: 'outer'
    console.log(globalVar); // Outputs: 'global'
  }

  inner();
}

outer();
```

## Global Scope

In JavaScript, the global scope is the outermost scope. Variables declared outside any function, block, or module live in the global scope. They can be accessed from any inner scope.

## Block Scope

With the introduction of let and const in ES6, JavaScript now has block scope in addition to function scope. Variables declared with let and const are confined to the block in which they are declared, not the function.

```js
if (true) {
  let x = "x"; // x is only accessible within this block
  console.log(x); // Outputs: 'x'
}
console.log(x); // Outputs: ReferenceError: x is not defined
```

## Lexical Scope

JavaScript has lexical scoping, which means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked. In other words, the JavaScript engine looks up variables in the scope where the functions were written.

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

## Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time.

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
console.log(add5(2)); // 7
```

## Common Mistakes

1. **Not understanding the difference between `var`, `let`, and `const`**: `var` is function-scoped, while `let` and `const` are block-scoped. This can lead to unexpected behavior if you're not careful.

2. **Creating global variables unintentionally**: If you assign a value to an undeclared variable, JavaScript automatically creates a global variable. This can lead to unexpected behavior and conflicts.

3. **Not understanding closures**: A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Misunderstanding how closures work can lead to unexpected behavior.

4. **Modifying variables in the parent scope**: Functions in JavaScript can access and modify variables in their parent scope. This can lead to bugs if you're not careful, as changes can propagate up the scope chain.

5. **Assuming that inner functions can access variables from sibling functions**: Each function creates its own scope, and sibling functions do not share scopes. A function can access variables from its parent scope and the global scope, but not from its sibling functions.

6. **Not understanding hoisting**: In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope. However, only the declarations are hoisted, not initializations. This can lead to `undefined` values if you try to use a variable before it's been initialized.
