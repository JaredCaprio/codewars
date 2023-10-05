/* <1> https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript
Write a function that accepts two numbers a and b and returns whether a is smaller than, 
bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"

There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code. 
*/
function noIfsNoButs(a, b) {
  let compare = a > b;
  let areEqual = a === b;

  switch (areEqual) {
    case true:
      return `${a} is equal to ${b}`;
      break;
    default:
      break;
  }

  switch (compare) {
    case true:
      return `${a} is greater than ${b}`;
      break;
    case false:
      return `${a} is smaller than ${b}`;
      break;
    default:
      return `${a} is equal to ${b}`;
  }
}
//</1>
