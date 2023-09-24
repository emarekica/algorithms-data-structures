/* Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate "pre" will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.


NOTES:

array collection of objects

- refers to an array in JavaScript that contains multiple objects as its elements
- array is an ordered collection of values, and each element of an array can be of any data type, including objects

STEPS:

1: Use every() to iterate through each object in the array (checks if all elements pass a given test (predicate) )

Only if all of them are truthy will we return true, so make sure all of them check.

2: Check if the current object has the 'pre' property using 'obj.hasOwnProperty(pre)'.

This ensures that we're only trying to access the property if it exists in the object.
'hasOwnProperty()' returns 'true' if the property exists, 'false' otherwise.
Additionally, we check if the value of the 'pre' property is truthy using 'Boolean(obj[pre])'.
'Boolean()' converts the value to a Boolean (true/false).
If the value is truthy, 'Boolean()' returns 'true'; otherwise, it returns 'false'.

*/


// Define a function named 'truthCheck'
// takes two parameters: 'collection' and 'pre'

function truthCheck(collection, pre) {

  // 1: check if all elements pass a given test (predicate)
  return collection.every(function(obj) {

    // 2: Check if the current object has the 'pre' property using 'obj.hasOwnProperty(pre)'
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  });
}

const result = truthCheck([
  {name: "Quincy", role: "Founder", isBot: false},
  {name: "Naomi", role: "", isBot: false},
  {name: "Camperbot", role: "Bot", isBot: true}
], "isBot");

// Log the result to the console.
console.log(result); // Output: false


truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


// Alternative solution:

function truthCheck2(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck2([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
