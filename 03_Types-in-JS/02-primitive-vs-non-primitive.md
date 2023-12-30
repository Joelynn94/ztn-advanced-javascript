## Primitive vs Non Primitive

### Primitive

-   Primitive values are immutable, they cannot be altered. The variable assigned to a primitive type may be reassigned to a new value, but the original value cannot be changed.

-   Primitives are passed by value, meaning their values are copied and then placed somewhere else in the memory. They are also compared by value.

-   There are currently 7 primitive data types in JavaScript: `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`.

### Non Primitive

-   The only non-primitive type in JavaScript is `object`.

-   Objects are mutable and their properties are passed by reference, meaning their properties are not stored separately in memory.

-   A new variable pointing to an object will not create a copy, but reference the original object's location in memory. Therefore, changing the 2nd object will also change the first.

### Shallow Copy vs Deep Copy

-   **Shallow copy**: A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

-   **Deep copy**: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

## Key Takeaways

-   Understanding the difference between primitive and non-primitive types in JavaScript is crucial for understanding how variables are stored and manipulated.

-   Be aware of the difference between shallow copy and deep copy when working with objects. Shallow copy only copies the top level properties, while deep copy copies all levels.

-   When comparing objects, JavaScript compares the memory addresses, not the content of the objects. To compare the content of two objects, you can convert them to JSON strings and compare those.

## Best Practices

-   Use `const` for variables that won't be reassigned to make your code more predictable.

-   When you want to create a new object that doesn't affect the original object, use a deep copy method like `JSON.parse(JSON.stringify(originalObj))`.

-   Be careful when copying arrays and objects since they are copied by reference in JavaScript.

-   When comparing objects, use `JSON.stringify(obj1) === JSON.stringify(obj2)` to compare the contents of the objects, not their memory addresses.

```js
// objects are passed by reference
let obj = {
	name: "object 1",
};
let newObj = obj; // points to same place in memory as obj
newObj.name = "newObj"; // modifies the memory
// Since both point to the same place...
console.log(obj); // {name: newObj}
console.log(newObj); // {name: newObj}
// They are both modified.

let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [1, 2, 3, 4]
```

```js
const originalObj = {
	nested: {
		nestedKey: "nestedValue",
	},
	key: "value",
};
// originalObj points to location 1 in memory
const assignObj = originalObj;
// assignObj will point to 1 in memory
const shallowObj = { ...originalObj };
// shallowObj points to a new location 2, but references location 1 for the nested object
const deepObj = JSON.parse(JSON.stringify(originalObj));
// deepObj clones all parts of the object to a new memory address
```
