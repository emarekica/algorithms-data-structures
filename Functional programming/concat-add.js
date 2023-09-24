/*  Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

Using push():

  const arr = [1, 2, 3];
  arr.push(4, 5, 6);
  arr would have a modified value of [1, 2, 3, 4, 5, 6], which is not the functional programming way.

concat offers a way to merge new items to the end of an array without any mutating side effects.

Change the nonMutatingPush function so it uses concat to merge newItem to the end of original without mutating original or newItem arrays. The function should return an array.

*/

function nonMutatingPush(original, newItem) {
  return original.push(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);