/* Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/


function dropElements(arr, func) {
  // Initialize an index variable to keep track of the current position in the array.
  let index = 0;

  // Iterate through the array using a while loop.
  while (index < arr.length) {
    // Check if the current element satisfies the condition specified by the 'func'.
    if (func(arr[index])) {
      // If the condition is met, break out of the loop.
      break;
    }

    // If the condition is not met, increment the index to move to the next element.
    index++;
  }

  // Use the slice method to return the remaining elements of the array starting from the 'index'.
  // If 'index' is equal to the array length, an empty array will be returned.
  return arr.slice(index);
}

dropElements([1, 2, 3], function(n) {return n < 3; });


const arr = [1, 2, 3, 4];
const conditionFunc = (num) => num >= 3;
const result = dropElements(arr, conditionFunc);
console.log(result); // Output: [3, 4]
