# PALINDROME CHECKER

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

<br>

## Learned

**RegEx pattern** `/[^a-zA-Z0-9]/g`
**removes non-alphanumeric characters** (punctuation, spaces, symbols)


`/` delimiters that indicate the beginning and end of the pattern

`^` (caret): Inside square brackets [] negates the character set it follows; same as '!' in JS: match any character that is NOT in the following character set

`a-zA-Z0-9` is a range of characters

`g` is a flag that stands for "global"; method should be done for all occurrences in the string; without it only the firs occurrence would be affected
<br>

`alphaLowercase(leftPointer)`

- `leftPointer` is variable that holds an index value
- access a character in the string alphaLowercase at the index specified by the value of leftPointer
<br><br>

**Palindrome**

HR

izreka, riječ, dio teksta, rečenica ili stih koji čitani od početka prema kraju ili obrnuto glase jednako
kisik;

    ratar;
    potop;

    Perica reže raci rep.
    U Rimu umiru.
    Sir ima miris.
<br>

EN

word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization, in most cases). In simpler terms, it's a sequence that remains unchanged when its order is reversed.

    race car
    level
    deified


<br><br>

## Steps

1. remove non-alphanumeric characters (punctuation, spaces, symbols)

2. convert to lowercase (case-insensitive comparison); can also be to uppercase

3. check for palindrome: if it reads the same forwards and backwards

4. return result (true if the string is a palindrome, false otherwise)

<br><hr><br>

[source](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)



FCC JavaScript Algorithms & Data structures tasks (legacy)