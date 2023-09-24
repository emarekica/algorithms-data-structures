# Array collection of objects

- refers to an array in JavaScript that contains multiple objects as its elements

- array is an ordered collection of values, and each element of an array can be of any data type, including objects
<br><br>

STEPS:

1: Use `every()` to iterate through each object in the array (checks if all elements pass a given test (predicate) )

Only if all of them are truthy will we return true, so make sure all of them check.

2: Check if the current object has the `pre` property using `obj.hasOwnProperty(pre)`.

This ensures that we're only trying to access the property if it exists in the object.
'hasOwnProperty()' returns `true` if the property exists, `false` otherwise.
Additionally, we check if the value of the `pre` property is truthy using `Boolean(obj[pre])`.
`Boolean()` converts the value to a Boolean (true/false).
If the value is truthy, `Boolean()` returns `true`; otherwise, it returns `false`.
