/* Smallest common multiple

Find the smallest common multiple (zajednički višekratnik: broj djeljiv s tim brojem) of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/


// Function to find the greatest common divisor (GCD) using Euclidean algorithm
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Function to find the least common multiple (LCM) of two numbers
function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

// Function to find the LCM of a range of numbers
function smallestCommons(arr) {
  // Sort the input array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  let lcm = arr[0]; // Initialize lcm with the first number in the range

  // Calculate the LCM of all numbers in the range one by one
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    lcm = findLCM(lcm, i);
  }

  return lcm;
}

// Test cases
console.log(smallestCommons([1, 3])); // Output: 6
console.log(smallestCommons([1, 5])); // Output: 60
console.log(smallestCommons([5, 1])); // Output: 60 (Note: The order of input doesn't matter)


smallestCommons([1,5]);


/*

The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended to more than two numbers as well.

We can first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.

Be careful - do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.

****

Formula for finding multiples

x = given number
n = number I am checking

n % x === 0; (in math: n mod x = 0)


****

LCM (least common multiple) approach

LCM is the smallest positive integer that is divisible by two numbers.

Finding the LCM of a range of numbers:

- start by finding the LCM of the two given parameters
- recursively calculate the LCM of this result with the next number in the range until we cover all the numbers in the range

****

1. define two helper functions:

- findGCD to find the greatest common divisor of two numbers
- findLCM to find the least common multiple of two numbers using the GCD

2. in the smallestCommons function:

- sort the input array

When finding the LCM of more than two numbers, it is essential to consider the LCM of each pair of numbers in the range. By sorting the array in ascending order, we start with the smallest number and progressively calculate the LCM with each subsequent number in the range. This ensures that we cover all possible pairs of numbers and find the overall LCM correctly.

- initialize the lcm variable with the first number in the range
- iteratively calculate the LCM with each subsequent number in the range

Result is the smallest common multiple that can be evenly divided by both the provided parameters and all sequential numbers in the range between them.

*/