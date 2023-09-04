/* <1> https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
In this kata, your job is to return the two distinct highest values in a list.
 If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/
function twoHighest(arr) {
  if (arr.length === 0) return [];
  if (arr.length <= 1) return [arr[0]];
  let treatedArr = arr
    .sort((a, b) => a - b)
    .filter((val, pos) => arr.indexOf(val) === pos);

  return [treatedArr[treatedArr.length - 1], treatedArr[treatedArr.length - 2]];
}
//</1>
