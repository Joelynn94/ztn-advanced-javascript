# JavaScript Memory Heap and Call Stack

## Memory Heap

The memory heap is where memory allocation happens in JavaScript. It's where variables and function declarations are stored.

```javascript
const numb = 610; // allocate memory for a number
const str = "some text"; // allocate memory for a string
const human = {
  // allocate memory for an object and its values
  firstName: "Joe",
  lastName: "Lynn",
};
```

## Call Stack

The call stack is where JavaScript keeps track of where your code is in its execution. Every time a function is called, it's added to the call stack. When the function has finished running, it's removed from the call stack.

```javascript
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate(); // adds calculate() to the call stack, then subtractTwo()
```
