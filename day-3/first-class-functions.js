// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */
// AT LEAST MAKE A FUNCTION TO RETURN LOL
/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
/*
I: a string or number
O: a function that compares that to another value
C:
E:
*/
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value){
    if (value > base){
      return true;
      }else{
        return false;
      }
    }
  }
  // YOUR CODE ABOVE HERE //


/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value){
    if (value < base){
      return true;
      }else{
        return false;
      }
    }
  }
  // YOUR CODE ABOVE HERE //


/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
  return function first(strang){
    let startSmall = startsWith.toLowerCase();
    let strangSmall = strang.toLowerCase();
;   if (startSmall === strangSmall[0]){
      return true;
    }else{
      return false;
    }
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
  return function last(strang){
    let endSmall = endsWith.toLowerCase();
    let strangSmall = strang.toLowerCase();
;   if (endSmall === strangSmall[strangSmall.length-1]){
      return true;
    }else{
      return false;
    }
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: an array of strings and a function that modifies them
O: the array of strings modified
C: uhhh
E: ummmmmmmmm
*/
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
  let modded = [];
  for (let i=0; i < strings.length; i++){
    modded.push(modify(strings[i]));
  }
  return modded;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: array of strings and function designed to test them
O: boolean true if ALL strings pass the test
*/
function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
  let count = 0;
  for (let i=0; i<strings.length; i++){
    if (test(strings[i]) !== true){
        count++;
    };
  }
  if (count === 0){
    return true;
  }else{
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
