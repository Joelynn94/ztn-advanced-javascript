## JavaScript Data Types

JavaScript has seven fundamental data types: `Number`, `String`, `Boolean`, `Symbol`, `BigInt`, `undefined`, and `null`. Additionally, `Object` is a complex data type that allows for the creation of complex data structures.

-   **Number**: Represents both integers and floating-point numbers.

-   **BigInt**: Represents integers of arbitrary length.

-   **String**: Represents a sequence of characters.

-   **Boolean**: Represents a logical entity and can have two values: `true` or `false`.

-   **Symbol**: Represents a unique identifier.

-   **undefined**: Represents a variable that has been declared but has not yet been assigned a value.

-   **null**: Represents the intentional absence of any object value.

-   **Object**: Allows you to store collections of data.

Primitive types (`Number`, `String`, `Boolean`, `Symbol`, `BigInt`) have corresponding object wrappers (`Number`, `String`, `Boolean`, `Symbol`, `BigInt`). JavaScript automatically wraps the primitives to provide methods and properties.

## Objects in JavaScript

Objects are one of the broadest types in JavaScript, almost "everything" is an object. Booleans, Numbers, and Strings can be objects if defined with the `new` keyword. Dates, Maths, Regular expressions, Arrays, Functions, and Objects are always objects.

## Key Takeaways

-   The `typeof` operator returns a string indicating the type of the unevaluated operand.

-   `null` is considered an object due to a bug in the original implementation of JavaScript, which was never corrected for backward compatibility reasons.

-   `undefined` and `null` are both used to represent the absence of value, but `undefined` is used when a variable has not been assigned a value, and `null` is used to represent the intentional absence of any object value.

-   Be aware of the difference between primitive types and their corresponding object wrappers. The latter should generally be avoided.

## Best Practices

-   Use `Array.isArray` or `Object.prototype.toString.call` to differentiate regular objects from arrays.

-   Avoid using `new Boolean`, `new Number`, and `new String` to create primitive values. These are considered bad practice and can lead to confusion.

-   Use `===` for comparison to avoid unexpected type coercion.

-   Be aware of the difference between `null` and `undefined` and use them appropriately.

-   Use `typeof` and `instanceof` to check the type of a variable when necessary.
