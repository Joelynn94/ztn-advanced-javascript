## Currying with Bind

Currying is a technique in JavaScript where a function with multiple arguments is broken down into a series of functions, each with a single argument.

-   `bind` can be used to implement currying by fixing (or "binding") the first n arguments of a function.

## Key Takeaways

-   Currying transforms a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

-   `bind` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

## Best Practices

-   Use currying when you want to create a new function based on an existing one but with some preset parameters.

-   Currying can help to avoid passing the same variable again and again.

-   Currying can help to create a higher order function. It's a very important concept in functional programming.

```js
function multiply(a, b) {
	return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // 8

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(6)); // 60
```
