# Execution Context in JavaScript

JavaScript code is always run inside an execution context. The execution context is the environment within which your code is run.

## Global Execution Context

The Global Execution Context has two phases:

1. **Creation Phase**

   - The global object is created.
   - The `this` keyword is initialized to the global object.

2. **Code Execution Phase**
   - A variable environment (memory space for `var` variables and functions) is created.
   - All variables are initialized to `undefined` (also known as hoisting) and placed into memory along with any functions.

## Function Execution Context

A Function Execution Context is created only when a function is invoked. It also has two phases:

1. **Creation Phase**

   - An argument object is created with any arguments passed to the function.
   - The `this` keyword is initialized to point to the object that called the function, or to the global object if not specified.

2. **Executing Phase**
   - A variable environment (memory space for variables and functions) is created.
   - All variables are initialized to `undefined` and placed into memory along with any new functions.

## `this` and `window` in Global Execution Context

In the global execution context, `this` and `window` are the same.

```javascript
console.log(this); // Window {...}
console.log(window); // Window {...}
console.log(this === window); // true
```
