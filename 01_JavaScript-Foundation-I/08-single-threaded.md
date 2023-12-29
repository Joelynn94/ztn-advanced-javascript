# JavaScript and Single Threading

JavaScript is a single-threaded language, meaning it can execute one set of instructions at a time. It doesn't run functions in parallel. This is because JavaScript has only one call stack where it keeps track of what function is currently being run and its context.

## Synchronous Execution

In the context of single-threaded JavaScript, synchronous execution means that JavaScript executes one operation at a time, in the order they are called. This can potentially lead to blocking operations, where a long-running operation prevents the execution of subsequent operations.

## Asynchronous Execution (JS Runtime)

In contrast to synchronous execution, JavaScript also supports asynchronous execution. This means that JavaScript can start a task, move on to another task, and then come back to the first task when it's finished. This is achieved through features like `setTimeout`, Promises, and async/await.

```javascript
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
```

[JS Runtime Playground](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

## Event Loop

The event loop is a constantly running process in the JavaScript runtime that checks if the call stack is empty. If it is, it takes the first task from the callback queue and pushes it to the call stack to be executed.

## Callback Queue

The callback queue is a list of callbacks that are waiting to be executed. When an asynchronous operation completes, its callback function is sent to the callback queue. The event loop constantly checks this queue and pushes the callbacks to the call stack when it's empty.
