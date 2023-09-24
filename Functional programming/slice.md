# SLICE() EXAMPLES


Makes a shallow **COPY** of the original array, does **not mutate** it.
<br>

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
<br><br>

## START
<br>

0 based index at which to start extraction.
<br><br>

    let negativeIndex = animals.slice(-2);
    console.log(negativeIndex); // ["duck", "elephant"]
<br>

    let undefinedStart = animals.slice();
    console.log(undefinedStart); // copy: ["ant", "bison", "camel", "duck", "elephant"]
<br>

    let startGreaterThanIndexRange = animals.slice(20);
    console.log(startGreaterThanIndexRange); // []
<br><br>

## END
<br>

Index of the first element to exclude from the returned array.
End not included in the extraction.
<br><br>

    let fromOneToAnotherElement = animals.slice(1, 4);
    console.log(fromOneToAnotherElement); // ["bison", "camel", "duck"]

    // extracts from 2nd to 4th element, 4th not included
    // 1: bison, 2: camel, 3:duck
    // 4: elephant is not included
<br>

    let offsetFromTheEndOfArray = animals.slice(2, -1);
    console.log(offsetFromTheEndOfArray); // ["camel", "duck"]

    // extracts from 3rd to second-to-last (do predzadnjeg)
    // 2: camel, 3: duck (predzadnji)
<br>

    let endOmitted = animals.slice(3);
    console.log(endOmitted); // ["duck", "elephant"]

    // extracts to the end of the sequence (array.length)
    // copy of new array contains: 3: duck, 4: elephant
<br>

    let endGreaterThanArrLength = animals.slice(2,30);
    console.log(endGreaterThanArrLength); // ["camel", "duck", "elephant"]

    // extracts through the end of the sequence
<br><br>


## EMPTY SPOTS PRESERVED
(sparce arrays)
<br><br>

    const a = [1, 2, , , 5];
    console.log(a); // [1, 2, undefined, undefined, 5]

    const copyOfA = a.slice();
    console.log(copyOfA); // [1, 2, undefined, undefined, 5]
<br><br>

## READS `LENGTH` PROPERTY OF `this`
(on non-array objects)
<br><br>

    const arrayLike = {
      length: 3,
      0: 2,
      1: 3,
      2: 4,
    };
    console.log(Array.prototype.slice.call(arrayLike, 1, 3));
    // [ 3, 4 ]
<br><br>

## CONVERTING ARRAY-LIKE OBJECTS TO ARRAYS

Used with `bind()` and `call()`.
<br><br>

    // slice() is called with `this` passed as the first argument
    const slice = Function.prototype.call.bind(Array.prototype.slice);

    function list() {
      return slice(arguments);
    }

    const list1 = list(1, 2, 3); // [1, 2, 3]
<br><br>