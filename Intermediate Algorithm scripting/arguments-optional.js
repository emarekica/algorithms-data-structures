/*

ARGUMENTS OPTIONAL

Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/


// STEPS

// 1. The addTogether function takes an arbitrary number of arguments using the arguments object.
// 2. It first checks if there are two arguments provided and if both are valid numbers. If so, it returns their sum.
// 3. If only one argument is provided and it's a valid number, the function returns another function. This returned function expects a single argument and returns the sum of the original argument and the argument passed to it.
// 4. If the arguments do not match any of the valid cases, the function returns undefined.
// 5. In the example usage, it demonstrates how to call addTogether with both two arguments and one argument, and how to use the returned function for further addition.


function addTogether() {
  // Check if both arguments are valid numbers
  if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {

    // If they are, simply return their sum
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1 && typeof arguments[0] === 'number') {

    // If only one argument is provided and it's a valid number, return a function
    // This returned function expects one argument and returns the sum
    const firstArg = arguments[0];

    return function(secondArg) {

      // Check if the second argument is a valid number
      if (typeof secondArg === 'number') {

        // If it is, return the sum of the two arguments
        return firstArg + secondArg;
      } else {

        // If the second argument is not a valid number, return undefined
        return undefined;
      }
    };
  } else {

    // If the arguments don't match any valid cases, return undefined
    return undefined;
  }
}

console.log(addTogether(2, 3)); // Output: 5

const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); // Output: 5

