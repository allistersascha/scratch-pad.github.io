// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/*
I: an array
O: the values in that array printed to console
C:
E:
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //use a for loop starting at index 0 and ending at how long the array is
  for (let i=0; i < array.length; i++){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}


/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/*
I: an array
O: the values in that array printed to console in reverse
C:
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
// put the loop down flip it and reverse it
for (let i=array.length-1; i >= 0; i--){
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: an object
O: the keys of that object as values in an array
C:
E:
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //make an empty array 
  let keyArr = [];
  //use for/in loop to get object keys & push into array
  for (let key in object){
    keyArr.push(key);
  }
  //return that array
  return keyArr;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/*
I: an object
O: the keys of that object logged to the console
C:
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop
  for (let key in object){
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: an object
O: the values of the keys in that object in an array
C:
E:
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //make an empty array 
  let valArr = [];
  //use for/in loop to get object keys & push into array
  for (let key in object){
    valArr.push(object[key]);
  }
//return that array
  return valArr;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/*
I: an object
O: the values of that object logged to the console
C:
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop
  for (let key in object){
    //use bracket notation
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: object
O: number of key/value pairs within that object
C:
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
 //maybe we can get the length of an array?
  let objArr = [];
   //use for/in loop to get object keys & push into array
   for (let key in object){
    objArr.push(object[key]);
  }
    // return the length of that array
  return objArr.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //make an empty array out of the object
  let revArr = [];
  for (let key in object){
    revArr.push(object[key]);
  };
  //then loop thru that array in reverse and print
  for (let i = revArr.length-1; i >= 0; i--){
    console.log(revArr[i]);
  };
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
