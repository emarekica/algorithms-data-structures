# EUCLIDEAN ALGORYTHM

The Euclidean algorithm is an ancient and efficient method for finding the greatest common divisor (GCD) of two positive integers. The GCD of two numbers is the largest positive integer that divides both of them without leaving a remainder.

The algorithm is based on the following key observation: If we have two positive integers "a" and "b" where "a" is greater than or equal to "b," then the GCD of "a" and "b" is the same as the GCD of "b" and the remainder of the division of "a" by "b."
<br><br>

Here's a step-by-step explanation of how the Euclidean algorithm works:

Given two positive integers "a" and "b" (where "a" is greater than or equal to "b").

Divide "a" by "b" to get the quotient "q" and the remainder "r":
a = q * b + r

If the remainder "r" is zero, then "b" is the GCD of "a" and "b." The algorithm terminates, and "b" is the result.

If the remainder "r" is not zero, update "a" with the value of "b" and "b" with the value of "r," and repeat step 2 (i.e., perform the division again).

Continue this process of dividing "b" into "a" and updating "a" and "b" until the remainder "r" becomes zero. The GCD will be the last non-zero remainder obtained.
<br><br>

Let's illustrate the Euclidean algorithm with an example:

Example: **Find the GCD of 48 and 18**

1: Divide 48 by 18 to get the quotient and remainder:
48 = 2 * 18 + 12

2: Since the remainder (12) is not zero, update "a" with the value of "b" (18) and "b" with the value of the remainder (12).

3: Divide 18 by 12 to get the quotient and remainder:
18 = 1 * 12 + 6

4: Again, since the remainder (6) is not zero, update "a" with the value of "b" (12) and "b" with the value of the remainder (6).

5: Divide 12 by 6 to get the quotient and remainder:
12 = 2 * 6 + 0

6: Now, the remainder is zero, so the algorithm terminates, and the GCD is the last non-zero remainder obtained, which is 6. Therefore, the GCD of 48 and 18 is 6.
<br><br>

The Euclidean algorithm is highly efficient and can quickly find the GCD of two numbers even if they are quite large. It has applications in various mathematical and computational problems, including cryptography, number theory, and optimization algorithms.
