# Stack Overflow

A stack overflow occurs when the call stack, which is used to manage function calls in JavaScript, exceeds its stack size. This typically happens with recursive functions — functions that call themselves. If a termination condition isn't met, the function will keep adding to the call stack, eventually causing a stack overflow.

## Preventing Stack Overflow

To prevent a stack overflow, you can use a technique called trampolining. This involves breaking the recursive call into a loop using `setTimeout`. `setTimeout` schedules the next call to the function, but doesn't add to the call stack, preventing a stack overflow.

```javascript
const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
	var item = list.pop();

	if (item) {
		setTimeout(removeItemsFromList, 0);
	} else {
		console.log("End = " + list.length);
	}
}

removeItemsFromList();
```
