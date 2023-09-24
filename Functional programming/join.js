/* Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

const arr = ["Hello", "World"];
const str = arr.join(" ");
str would have a value of the string Hello World.

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

NOTES:

join() creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string

opposite of split(), which takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

*/

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

sentensify("May-the-force-be-with-you");
