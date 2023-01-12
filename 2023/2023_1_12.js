/*<1> https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
Write a function that takes an integer as input, and returns the number of bits 
that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the 
function should return 5 in this case
*/
var countBits = function (n) {
  if (n < 1) return 0;
  const binNum = n.toString(2);
  const regex = /1/g;
  const match = binNum.match(regex);
  return match.join("").length;
};
//</1>
