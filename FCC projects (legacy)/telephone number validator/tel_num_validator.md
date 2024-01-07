# Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


<br><br>

## Steps

1. Remove Whitespace: Trim the input string to remove any leading or trailing whitespace.
   method: trim()

2. Check Length: Ensure that the length of the string is at least 10 characters.
   method: .length

3. Remove Country Code: If the string starts with "1", remove these characters to account for the country code.
   methods: startsWith(), slice()

4. Extract Digits: Remove all non-digit characters from the string, such as hyphens, spaces, and parentheses.
   method: replace() with RegEx

5. Check Digit Count: Confirm that there are exactly 10 digits remaining in the string.
   method: .length

6. Validate Format: Compare the remaining string against the provided valid formats using regular expressions. Ensure it matches one of the following formats:

        555-555-5555
        (555)555-5555
        (555) 555-5555
        555 555 5555
        5555555555


   `method: test()`

7. Validate Area Code: Verify that the first three digits (the area code) are valid for US phone numbers.
   methods: substring(indexStart, indexEnd); startsWith

8. Return True or False: Based on the results of the above checks, return true if the string is a valid US phone number and false if it's not.

<br><hr><br>

[source](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)