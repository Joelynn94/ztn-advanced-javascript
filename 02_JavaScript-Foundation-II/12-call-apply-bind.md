## Call, Apply, Bind

call, apply, and bind are methods used to control the value of this.

```js
function greet() {
	console.log(`Hello, ${this.name}!`);
}

const person = { name: "Alice" };

greet.call(person); // Outputs: "Hello, Alice!"
```
