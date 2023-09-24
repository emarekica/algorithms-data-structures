/* Refactor Global Variables Out of Functions
So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

*/


const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(array, bookName) {
  let addedBookList = array.slice();

  addedBookList.push(bookName);
  return addedBookList;

}

function remove(array, bookName) {
  let removedBookList = array.slice();

  const book_index = removedBookList.indexOf(bookName);

  // Check whether the bookName parameter is in new array.
  if (book_index >= 0) {

    removedBookList.splice(book_index, 1);
    return removedBookList;

    }
}

let biggerBookList = add(bookList, "new title")
console.log(biggerBookList);

let smallerBookList = remove(bookList, "last title");
console.log(smallerBookList);
