// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
I: the numbers 1-100? none??
O: same numbers but fizz for multiples of 3, buzz for mults of 5, and fizzbuzz for 15
C: order of operations is key
E:
*/
function fizzBuzz() {
  // YOUR CODE GOES BELOW HERE //
  //set up a for loop starting at 1 and ending at 100
  for (let i=1; i<=100; i++){
    //do fizzbuzz first in conditional so it don't get twisted
    if (i % 15 === 0){
      console.log("FizzBuzz");
    }else if (i % 3 === 0){
      console.log("Fizz");
    }else if (i % 5 === 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
    }
  // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
