// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: string
O: number that is string's length
C:
E:
*/
function length(string) {
  // YOUR CODE BELOW HERE //
// use string.length method
  return string.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: string
O: string in lowercase
C:
E:
*/
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  // use the toLowerCase method
  return string.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: a string
O: same string made uppercase
C:
E:
*/
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
  //use toUpperCase method
  return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: a string
O: same string with dashes between words instead of spaces
C:
E:
*/
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  //split the string into words
  //join with a "-"
  return string.toLowerCase().split(" ").join("-");
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: a string and one character
O: true or false if the string begins with that char
C: case insensitive
E:
*/
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
  //turn everything lowercase for consistency
  // return boolean of whether the character is the same as the 0th index of the string
  if (char.toLowerCase() === string[0].toLowerCase()){
    return true;
  }else{
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: string and one character
O: boolean if the string ends with that character
C: case insensitive
E:
*/
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  //convert to lowercase for consistency
  //use string.length-1 to find the index of the char you need
  // compare the charAt that index to the char parameter
  if (char.toLowerCase() === string.charAt(string.length-1).toLowerCase()){
    return true;
  }else{
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: two strings
O: one string made of the two concatenated
C:
E:
*/
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  //use the + or concat method??
  return stringOne + stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: a bunch of strings
O: all those strings joined together
C: gives you an array
E:
*/
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
  //use the array.join method
  let bigString = args.join("");
  return bigString;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: two strings
O: the string that is longest
C:
E: edge cases: same length??
*/
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  //use the string.length method and a conditional to compare them
  if (stringOne.length > stringTwo.length){
    return stringOne;
  }else{
    return stringTwo;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings
O: 1 if the first string is first in the alphabet, -1 if the second is higher, 0 if they are equal
C:
E:
*/
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //

  //THIS DIDN'T WORK YOU NEED THE WHOLE WORD:
  //conditional statement comparing??
  // the codePointAt() i guess??
  /*if (stringOne.charCodeAt(0) > stringTwo.charCodeAt(0)){
    return 1;
  }else if (stringOne.charCodeAt(0) < stringTwo.charCodeAt(0)){
    return -1;
  }else{
    return 0;
  }*/
  //THIS DIDN'T WORK ^
  
  //loop thru both strings and compare the first letters until they differ and then that's the one?
  if (stringOne === stringTwo){
    return 0;
  }else if (stringOne.charCodeAt(0) < stringTwo.charCodeAt(0)){
    return 1;
  }else if (stringOne.charCodeAt(0) > stringTwo.charCodeAt(0)){
    return -1;
  }else if (stringOne.charCodeAt(0) === stringTwo.charCodeAt(0)){
    if (stringOne.charCodeAt(1) < stringTwo.charCodeAt(1)){
      return 1;
    }else if (stringOne.charCodeAt(1) > stringTwo.charCodeAt(1)){
      return -1;
    }else{
      return 0;
    }
  }
  //^^ this works for these tests but i know could be written better
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings
O: 1 if the first string is later in the alphabet, -1 if the second is later, 0 if they are equal
C:
E:
*/
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
   //conditional statement comparing??
  // the codePointAt() i guess??
  if (stringOne === stringTwo){
    return 0;
  }else if (stringOne.charCodeAt(0) > stringTwo.charCodeAt(0)){
    return 1;
  }else if (stringOne.charCodeAt(0) < stringTwo.charCodeAt(0)){
    return -1;
  }else if (stringOne.charCodeAt(0) === stringTwo.charCodeAt(0)){
    if (stringOne.charCodeAt(1) > stringTwo.charCodeAt(1)){
      return 1;
    }else if (stringOne.charCodeAt(1) < stringTwo.charCodeAt(1)){
      return -1;
    }else{
      return 0;
    }
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
