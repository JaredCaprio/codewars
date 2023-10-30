/* <1> https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted and not have 
any duplicate.
*/

function mergeArrays(a, b) {
  let combinedArr = a.concat(b).sort((a, b) => a - b);
  return Array.from(new Set(combinedArr));
}
//</1>
