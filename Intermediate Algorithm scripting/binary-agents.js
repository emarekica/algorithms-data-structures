/* Binary Agents

The binary string will be space separated.
Return an English translated sentence of the passed binary string.


NOTES:

 - String.prototype.charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index

 - String.fromCharCode() returns a string created from the specified sequence of UTF-16 code units

 - split()

    1: takes a pattern
    2: divides this string into an ordered list of substrings by searching for the pattern
    3: puts these substrings into an array
    4: returns the array

-  parseInt() parses a string argument and returns an integer of the specified radix

      parseInt(string, radix)

*/


function binaryAgent(str) {
  // Split the binary string into an array of binary values
  const binaryValues = str.split(' ');

  // Convert each binary value to its ASCII character representation
  const translatedCharacters = binaryValues.map(binaryValue => {

    // Convert binary to decimal using parseInt with base 2
    const decimalValue = parseInt(binaryValue, 2);

    // Convert decimal to character using String.fromCharCode
    return String.fromCharCode(decimalValue);
  });

  // Join the translated characters to form the English sentence
  const translatedSentence = translatedCharacters.join('');

  return translatedSentence;
}

const result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(result); // Output: "Aren't bonfires fun!?"
