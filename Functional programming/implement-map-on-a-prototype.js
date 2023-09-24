/* Implement map on a Prototype

As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

*/

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  console.log(this); // [ 23, 65, 98, 5 ]

 /* SOLUTION 1

  “for” loop allows us to apply the callback function to every item in the Global array (const s) and then push the modified items to the empty new array that is returned in the end

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
    console.log(this);
  }
*/

// SOLUTION 2
this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

/*

"this" with solution 1:

[ 23, 65, 98, 5 ]
[ 23, 65, 98, 5 ]
[ 23, 65, 98, 5 ]
[ 23, 65, 98, 5 ]

*/
