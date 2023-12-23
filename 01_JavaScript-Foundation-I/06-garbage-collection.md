# JavaScript Garbage Collection

Garbage collection in JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore. This process involves two steps:

1. **Mark**: This step marks objects that still have references.
2. **Sweep**: This step scans all objects in memory and removes all the ones that are not marked.

## Mark-and-Sweep Algorithm

This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable". It starts from a set of objects known as roots (in JavaScript, the root is the global object), finds all objects that are referenced from these roots, and collects all non-reachable objects.

```javascript
let human = {
	firstName: "Joe",
	lastName: "Lynn",
};

human = 5; // The object previously referenced by 'human' is now unreachable and can be garbage collected
```
