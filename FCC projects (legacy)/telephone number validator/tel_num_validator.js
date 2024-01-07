function telephoneCheck(str) {
  // remove whitespace
  let trimmed = str.trim();

  // check length
  if (trimmed.length < 10) {
    return false;
  }

  // validate form
  const validUsPhoneFormats1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
  const validUsPhoneFormats2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if(validUsPhoneFormats1.test(trimmed)) {
    return true;
  } else if(validUsPhoneFormats2.test(trimmed)) {
    return true;
  }

  // check fo unwanted non-alphanumeric characters
  const unwantedChar = /[^a-zA-Z0-9]/g;

  if (unwantedChar.test(trimmed)) {
    return false;
  }

  // extract digits = remove non-alphanumeric characters (punctuation, spaces, symbols)
  const extractedDigits = trimmed.replace(/[^a-zA-Z0-9]/g, '');

  // check digits count
  if(extractedDigits.length !== 10) {
    return false
  }

  return true;
}

console.log(telephoneCheck("555-555-5555"), "boolean") // should return a boolean.
console.log(telephoneCheck("1 555-555-5555"), "true") // should return true.
console.log(telephoneCheck("1 (555) 555-5555"), "true") // should return true.
console.log(telephoneCheck("5555555555"), "true") // should return true.
console.log(telephoneCheck("555-555-5555"), "true") // should return true.
console.log(telephoneCheck("(555)555-5555"), "true") // should return true.
console.log(telephoneCheck("1(555)555-5555"), "true") // should return true.
console.log(telephoneCheck("555-5555"), "false") // should return false.
console.log(telephoneCheck("5555555"), "false") // should return false.
console.log(telephoneCheck("1 555)555-5555"), "false") // should return false.
console.log(telephoneCheck("1 555 555 5555"), "true") // should return true.
console.log(telephoneCheck("1 456 789 4444"), "true") // should return true.
console.log(telephoneCheck("123**&!!asdf#"), "false") // should return false.
console.log(telephoneCheck("55555555"), "false") // should return false.
console.log(telephoneCheck("(6054756961)"), "false") // should return false.
console.log(telephoneCheck("2 (757) 622-7382"), "false") // should return false.
console.log(telephoneCheck("0 (757) 622-7382"), "false") // should return false.
console.log(telephoneCheck("-1 (757) 622-7382"), "false") // should return false.
console.log(telephoneCheck("2 757 622-7382"), "false") // should return false.
console.log(telephoneCheck("10 (757) 622-7382"), "false") // should return false.
console.log(telephoneCheck("27576227382"), "false") // should return false.
console.log(telephoneCheck("(275)76227382"), "false") // should return false.
console.log(telephoneCheck("2(757)6227382"), "false") // should return false.
console.log(telephoneCheck("2(757)622-7382"), "false") // should return false.
console.log(telephoneCheck("555)-555-5555"), "false") // should return false.
console.log(telephoneCheck("(555-555-5555"), "false") // should return false.
console.log(telephoneCheck("(555)5(55?)-5555"), "false") // should return false.
console.log(telephoneCheck("55 55-55-555-5"), "false") // should return false.
console.log(telephoneCheck("11 555-555-5555"), "false") // should return false.
