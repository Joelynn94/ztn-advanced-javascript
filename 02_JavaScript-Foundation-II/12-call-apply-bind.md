## Call, Apply, Bind

These are methods used to control the value of `this` in JavaScript.

-   **Call**: Invokes a function with a given `this` value and arguments provided individually.

-   **Apply**: Invokes a function with a given `this` value and arguments provided as an array.

-   **Bind**: Returns a new function, allowing you to pass in a `this` and any number of arguments. It does not immediately execute the function.

## Key Takeaways

-   `call` and `apply` are similar, but `apply` takes an array of arguments, while `call` takes arguments individually.

-   `bind` creates a new function that, when called, has its `this` keyword set to the provided value.

## Best Practices

-   Use `call` or `apply` when you want to use a method from another object but with a different `this` value.

-   Use `bind` when you want to create a new function with a certain context or parameters, but don't want to invoke it immediately.

```js
const wizard = {
	name: "Merlin",
	health: 100,
	heal(num1, num2) {
		return (this.health += num1 + num2);
	},
};

const archer = {
	name: "Robin Hood",
	health: 30,
};

// Using call
wizard.heal.call(archer, 50, 20);
console.log(archer); // health: 100

// Using apply
wizard.heal.apply(archer, [50, 20]);
console.log(archer); // health: 100

// Using bind
const healArcher = wizard.heal.bind(archer, 50, 20);
healArcher();
console.log(archer); // health: 100
```
