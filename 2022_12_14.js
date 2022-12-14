/*<1> https://www.codewars.com/kata/639918bef003910b2146d0b8/train/javascript
Write a function that returns whether it is running in strict mode.
*/

function isInStrictMode() {
  if (this === undefined) {
    return true;
  } else {
    return false;
  }
}
//</1>

/*<2> https://www.codewars.com/kata/6391fe3f322221003db3bad6/train/javascript
You are given an input (n) which represents the amount of lines you are given, 
your job is to figure out what is the maximum amount of perpendicular bisectors
 you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0

*/
function maxBisectors(n) {
  return Math.floor(Math.pow(n, 2) / 4);
}
//</2>

/*<3> https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
Given an array of integers.

Return an array, where the first element is the count of positives numbers 
and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
 you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let pos = 0;
  let neg = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      neg.push(input[i]);
    } else if (input[i] > 0) {
      pos++;
    }
  }
  let reducedNeg = neg.reduce((a, b) => a + b, 0);
  return !pos && neg.length < 1 ? [] : [pos, reducedNeg];
}

//</3>
