/* Flatten a nested array. You must account for varying levels of nesting.

NOTES:

- make sure to flatten ANY nested array, no matter how deeply nested

- Array.isArray(item): This is a built-in JavaScript method that checks whether the given item is an array or not. It returns true if item is an array, and false otherwise.

- for..of loop is used

*/

function steamrollArray(arr) {

  // Initialize an array to hold the flattened elements
  const flattenedArray = [];

  // Helper function to recursively flatten nested arrays
  function flattenArray(item) {
    // If the item is not an array, add it to the flattenedArray
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    } else {
      // If the item is an array, iterate through its elements
      for (const subItem of item) {
        // Call the flattenArray function recursively on each element
        flattenArray(subItem);
      }
    }
  }

  // Start the flattening process by iterating through the input array
  for (const item of arr) {
    // Call the flattenArray function on each element of the input array
    flattenArray(item);
  }

  // Return the flattened array
  return flattenedArray;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result); // Output: [1, 2, 3, 4]
