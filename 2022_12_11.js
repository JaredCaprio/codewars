/*<1>. https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(arr) {
  let obj = {};
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  for (const key in obj) {
    if (obj[key] % 2 === 1) {
      result = key;
    }
  }
  return parseInt(result);
}

//</1>

/*<2> https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
 Create the function prefill that returns an array of n elements that all have the same value v.
  See if you can do this without using a loop.

You have to validate input:

    v can be anything (primitive or otherwise)
    if v is ommited, fill the array with undefined
    if n is 0, return an empty array
    if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError

When throwing a TypeError, the message should be n is invalid,
 where you replace n for the actual value passed to the function.
 */

function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}

// </2>
