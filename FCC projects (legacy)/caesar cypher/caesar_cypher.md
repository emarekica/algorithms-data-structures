# CAESAR CYPHER

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

<br>

## Learned

*declared*: const decode;

*initialized*: const decode = "";

<hr ><br>

ASCII values for uppercase letters range from 65 to 90

<hr ><br>

`charAt()`: returns the character itself

`charCodeAt()`: returns an integer representing the Unicode value of the character

`String.fromCharCode()`:returns a string created from the specified sequence of UTF-16 code units

<hr ><br>

`match()`: retrieves the result of matching this string against a regular expression

`match(/[A-Z]/)`: Regex uppercase check

<hr ><br>

**Why use "26" in ROT13**

The ROT13 algorithm is a simple letter substitution cipher that replaces each letter with the letter 13 positions down the alphabet.
Since there are 26 letters in the English alphabet, moving 13 positions in either direction (up or down) is equivalent to rotating back to the original letter.
It does now go below 65 nor above 90:

    If you start with the letter 'A' and subtract 13 positions, you get 'N'. This means 'A' is replaced by 'N'.
    If you start with 'N' and add 13 positions, you get 'A'. So, 'N' is replaced by 'A'.

<br><br>

## Steps

1. Initialize an empty string to store the decoded result

2. Loop through each character in the input string (str)

    2a. Check if it's an uppercase letter (A-Z); use methods like charCodeAt to check the character's ASCII code or a regular expression to check if it's a letter

3. Apply the ROT13 transformation: If the character is an uppercase letter, apply the ROT13 transformation by shifting it 13 places backward in the alphabet
To do this, you can subtract 13 from the character's ASCII code and convert it back to a character.
Example: If you encounter 'N' (ASCII 78), subtract 13 to get 'A' (ASCII 65).

4. Leave non-alphabetic characters unchanged, append the transformed or unchanged character to the result string.

5. Once you've processed all characters, return the decodedStr as the final result.

<br><hr><br>

[source](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)