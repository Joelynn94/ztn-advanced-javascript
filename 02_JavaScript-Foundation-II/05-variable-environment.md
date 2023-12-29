## Variable Environment

Each execution context (global or function) in JavaScript has a variable environment associated with it. It's a record of all the variables, functions, and function arguments that are created within that context. It's important to note that each function has its own variable environment.

```javascript
function outer() {
  var x = "x"; // x is part of the variable environment of outer function

  function inner() {
    var y = "y"; // y is part of the variable environment of inner function
  }
}
```
