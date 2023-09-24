/*

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').


NOTES:

- use a closure to hold data that is not a property
- checks for how many keys are used. Any additionaly declared variables have to be in the closure of the object and not properties

- methods allow you to get and set the first name, last name, and full name of a Person instance while encapsulating the data within the object

- common way of defining methods for objects created by the constructor function

    this.setFirstName = function(newFirst) {
      firstName = newFirst;
    };

- in ES6 or later, you can define methods directly within the class definition

    setFirstName(newFirst) {
      this.firstName = newFirst;
    }

*/

// Define the Person constructor
const Person = function(first, last) {

  // Initialize the first and last name properties
  let firstName = first;
  let lastName = last;

  // Method to get the first name
  this.getFirstName = function() {
    return firstName;
  };

  // Method to get the last name
  this.getLastName = function() {
    return lastName;
  };

  // Method to get the full name
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  // Method to set the first name
  this.setFirstName = function(newFirst) {
    firstName = newFirst;
  };

  // Method to set the last name
  this.setLastName = function(newLast) {
    lastName = newLast;
  };

  // Method to set the full name
  this.setFullName = function(newFirst, newLast) {
    firstName = newFirst;
    lastName = newLast;
  };

  // Return the newly created object
  return this;
};

// Create a new Person instance
const person = new Person('Bob', 'Ross');

// Run tests to see the expected output for each method
console.log(person.getFirstName()); // Output: Bob
console.log(person.getLastName());  // Output: Ross
console.log(person.getFullName());  // Output: Bob Ross

// Set new first and last names
person.setFirstName('John');
person.setLastName('Doe');

console.log(person.getFullName());  // Output: John Doe

// Set a new full name
person.setFullName('Alice', 'Johnson');

console.log(person.getFullName());  // Output: Alice Johnson
