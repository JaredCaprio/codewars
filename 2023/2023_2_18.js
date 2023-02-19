/* <1> https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/
function largest(n, array) {
  if (n < 1) return [];
  let output = array.sort((a, b) => a - b).slice(-n);
  return output;
}
//</1>
