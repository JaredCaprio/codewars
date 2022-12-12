/*<1>https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
//</1>

/*<2>https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript

This function should return an object, but it's not doing what's intended. What's wrong?

*/
function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
//</2>
/*<3>https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

Create a function that takes 2 integers in form of a string as an input, 
and outputs the sum (also as a string):

*/
function sumStr(a, b) {
  if (!a) a = 0;
  if (!b) b = 0;
  let sum;
  sum = parseInt(a) + parseInt(b);

  return sum.toString();
}
//</3>

/*<4> https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
*/
function switchItUp(number) {
  let lNm = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return lNm[number];
}
//</4>
