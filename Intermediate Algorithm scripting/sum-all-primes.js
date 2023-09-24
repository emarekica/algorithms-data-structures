/* Sum all primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


STEPS:

Find all prime numbers up to the number you are given as a parameter and return their sum.

Algorithms for finding prime numbers:

1. Create a helper function isPrime(num) to check if a number is prime.

To check if a number is prime, we can loop from 2 to the square root of the number and check if the number is divisible by any of these values. If it is divisible by any value in this range, it is not prime.

2. Create a variable sum to store the sum of prime numbers.

3. Loop through numbers from 2 to num (inclusive) and check if each number is prime using the isPrime function. If it is prime, add it to the sum.

4. After the loop, return the final value of sum.

*/

// Helper function to check if a number is prime
function isPrime(num) {
  // A number less than 2 is not prime, so return false
  if (num < 2) return false;

  // Loop from 2 to the square root of the number
  // Checking for divisors (excluding 1 and the number itself)
  // If any divisor is found, the number is not prime, so return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If no divisors are found, the number is prime, so return true
  return true;
}

// Function to find and sum all prime numbers up to the given number
function sumPrimes(num) {
  // Variable to store the sum of prime numbers
  let sum = 0;

  // Loop through numbers from 2 to num (inclusive)
  for (let i = 2; i <= num; i++) {
    // Check if the current number (i) is prime using the isPrime function
    if (isPrime(i)) {
      // If the number is prime, add it to the sum
      sum += i;
    }
  }

// Return the sum of prime numbers
return sum;
}

console.log(sumPrimes(10)); // Output: 17 (2 + 3 + 5 + 7 = 17)
