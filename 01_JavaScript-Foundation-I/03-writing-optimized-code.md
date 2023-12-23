# Writing Optimized Code

### Inline Caching

JavaScript uses inline caching to optimize functions that are called multiple times. This process caches the function's result, speeding up subsequent calls.

```js
function findUser(user) {
	return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
	firstName: "Joe",
	lastName: "Junior",
};

findUser(userData);
```

### Hidden Classes

JavaScript compilers use hidden classes to optimize object property access. Maintaining a consistent property order across objects of the same class allows the compiler to optimize code more effectively.

```js
function Animal(x, y) {
	this.x = x;
	this.y = y;
}

// Consistent property order optimizes code
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// Inconsistent property order can de-optimize code
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// Consistent property order is better
obj1.a = 30;
obj1.b = 100;
obj2.a = 30;
obj2.b = 100;
```
