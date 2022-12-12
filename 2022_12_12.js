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
