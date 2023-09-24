# Making a copy of array in 2 ways:

used for making a shallow copy of an array

    let array = [1, 2, 3];
    let copyOfArray = array.slice();

    console.log(copyOfArray); // [1, 2, 3]
<br>

destructuring assignment

    let array = [1, 2, 3];
    let copyOfArray = [...array];

    console.log(copyOfArray); // [1, 2, 3]
<br>

[Javascript Passing by Value vs. Reference Explained in Plain English](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
