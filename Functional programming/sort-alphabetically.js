/* Sort an Array Alphabetically using the sort Method

The sort method sorts the elements of an array according to the callback function.

For example:

    function ascendingOrder(arr) {
      return arr.sort(function(a, b) {
        return a - b;
      });
    }

    ascendingOrder([1, 5, 2, 3, 4]);
    This would return the value [1, 2, 3, 4, 5].

    function reverseAlpha(arr) {
      return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
      });
    }

reverseAlpha(['l', 'h', 'z', 'b', 's']);
This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.


NOTES:

syntax: sort(function compareFn(a, b) {})

- if compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order

- provide a callback function (compareFunction) to specify how to sort the array items

  a: if compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b
  b: if compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a
  c: if compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged

*/

function alphabeticalOrder(arr) {
  return arr.sort();
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
