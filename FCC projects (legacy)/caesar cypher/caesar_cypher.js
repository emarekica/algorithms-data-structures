function rot13(str) {
  let decoded = "";

  for (let i = 0; i < str.length; i++ ) {

    const character = str.charAt(i); // character
    const characterUnicode = str.charCodeAt(i); // unicode number of the character

    // checks for uppercase
    if(character.match(/[A-Z]/)) {

      // ROT13 transformation
      let transformedCharacter = characterUnicode - 13;
      if(transformedCharacter < 65) {
        transformedCharacter += 26; // Wrap around if it goes below 'A'
      }

      decoded += String.fromCharCode(transformedCharacter);
    } else {

      // if the character is a non-alphabetic character, it is appended and not transformed
      decoded += character;
    }
  }

 return decoded;
}

const deciphered = rot13("SERR PBQR PNZC");
console.log(deciphered);