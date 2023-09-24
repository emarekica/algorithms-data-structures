/*  Sum all odd fibonacci numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

You will need to gather all the Fibonacci numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

To check if a number is even all you have to check is if number % 2 == 0.

As you get the next odd one, don’t forget to add it to a global variable that can be returned at the end. result += currNumber; will do the trick.

*/


function sumFibs(num) {
  let previousFibonacci = 0;
  let currentFibonacci = 1;
  let sum = 0;

  // 1. Gather all Fibonacci Numbers
  while(currentFibonacci <= num) {
    // 2. Check for Odd Fibonacci Numbers
    if(currentFibonacci % 2 === 1) {
      // 3. Calculate the Sum of Odd Fibonacci Numbers
      sum += currentFibonacci;
    }

    // Calculate nextFibonacci
    let nextFibonacci = previousFibonacci + currentFibonacci;

    // Update previousFibonaci and currentFibonaci
    previousFibonacci = currentFibonacci;
    currentFibonacci = nextFibonacci;
  }

  //return sum of all odd Fibonacci numbers
  return sum;
}

sumFibs(4);


/*  SOLUTION STEPS

1. Gather all Fibonacci Numbers

First we need to generate a list of all Fibonacci numbers that are less than or equal to the given input number num.

The formula to calculate the next Fibonacci number in the sequence is:

    nextFibonacci = previousFibonacci + currentFibonacci

To gather all Fibonacci numbers less than or equal to num, we can use a loop to generate the sequence until the current Fibonacci number exceeds num. During this process, we keep track of the current and previous Fibonacci numbers to calculate the next one.


2. Check for Odd Fibonacci Numbers

After obtaining all the Fibonacci numbers, we need to check which ones are odd.

An odd number is one that is not divisible by 2.
To check if a number is odd, use modulo operator %.

    num % 2 = 1 >>> odd

    num % 2 = 0 >>> even


3. Calculate the Sum of Odd Fibonacci Numbers

Here we add all the odd Fibonacci numbers together to obtain the result.

Use a variable "sum" to keep track of the cumulative sum.
As we iterate through the Fibonacci numbers, we check if the current number is odd.
If it is, we add it to the sum.

*/