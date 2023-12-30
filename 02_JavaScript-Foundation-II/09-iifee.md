## Immediately Invoked Function Expressions (IIFEs)

An IIFE is a function expression that is invoked as soon as it is defined. No global property is being created. All properties being created inside the iffee will be scoped to inside

```js
(function () {
  console.log("Hello, world!");
})(); // Outputs: "Hello, world!"
```

## Takeaways and Best Practices

1. **Encapsulation**: IIFEs are a great way to encapsulate code and create private scopes. Use them to avoid polluting the global scope.

2. **Module Pattern**: IIFEs are often used in the Module Pattern to create modules that have private and public parts.

3. **Avoid Global Variables**: By using IIFEs, you can avoid creating global variables, which can lead to naming conflicts and harder-to-maintain code.

## Common Mistakes

1. **Forgetting Parentheses**: The most common mistake when using IIFEs is forgetting the wrapping parentheses. Without them, JavaScript will treat the `function` keyword as a function declaration, not a function expression, and throw a syntax error.

2. **Misunderstanding Scope**: Remember that variables defined inside an IIFE are not accessible outside it. Trying to access such variables can lead to `ReferenceError`.

3. **Overuse**: While IIFEs are useful for creating private scopes, overusing them can make your code harder to read and debug. Use them judiciously.
