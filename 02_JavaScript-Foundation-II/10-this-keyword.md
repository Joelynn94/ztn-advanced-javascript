## this Keyword

this is a special keyword that refers to the context in which a function is called.

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet(); // Outputs: "Hello, Alice!"
```
