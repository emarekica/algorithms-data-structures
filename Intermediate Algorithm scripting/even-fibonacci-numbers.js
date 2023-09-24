/* PROBLEM

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

*/

/* HINT

A fibonacci sequence is a sequence where fib(n) = fib(n-1) + fib(n-2).

In this challenge we have to sum all the even Fibonacci values up to and including the value n:.

Example for fiboEvenSum(8):

  The sequence up to and including the value 8 is: 1, 2, 3, 5, 8

  Sum of all even number in the above sequence is: 2 + 8 = 10


** finding even value in the sequence
** only keep track of three values at a time


*/


// Solution 1
// const fiboEvenSum = (number) => {
//   if (number <= 1) {
//     return 0;
//   } else {
//     let evenSum = 0,
//       prevFibNum = 1,
//       // According to problem description our Fibonacci series starts with 1, 2
//       fibNum = 2;
//     for (let i = 2; fibNum <= number; i++) {
//       if (fibNum % 2 == 0) {
//         evenSum += fibNum;
//       }
//       [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
//     }
//     return evenSum;
//   }
// };


// Solution 2 (AI)
function fiboEvenSum(n) {
  // Initialize variables
  let sum = 0;
  let previous = 1;
  let current = 2;

  // Loop until the current Fibonacci number exceeds n
  while (current <= n) {
    // Check if the current Fibonacci number is even
    if (current % 2 === 0) {
      // Add the even number to the sum
      sum += current;
    }

    // Calculate the next Fibonacci number by adding the previous two numbers
    const next = previous + current;
    previous = current;
    current = next;
  }

  // Return the sum of even-valued Fibonacci numbers
  return sum;
}

// We initialize the sum to 0, as we need to calculate the sum of even-valued terms.
// We set the previous variable to 1 and the current variable to 2, as these are the first two terms of the Fibonacci sequence.
// We start a while loop that continues until the current Fibonacci number exceeds n.
// Inside the loop, we check if the current Fibonacci number (current) is even by using the modulo operator (%). If the remainder of current divided by 2 is 0, it means current is divisible by 2 and hence an even number.
// If the current Fibonacci number is even, we add it to the sum variable.
// Next, we calculate the next Fibonacci number by adding the previous and current numbers and store it in the next variable.
// We update the previous and current variables to move forward in the Fibonacci sequence.
// The loop continues until the current Fibonacci number exceeds n.
// Finally, we return the sum variable, which holds the sum of even-valued Fibonacci numbers that do not exceed n.
