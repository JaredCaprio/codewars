/*<1> https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
Given two i ntegers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

*/
function getSum(a, b) {
  let values = Object.values(arguments);
  let sorted = values.sort((a, b) => a - b);
  console.log(sorted);
  let result = 0;
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    result += i;
  }

  return result;
}
//</1>

/*<2> https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
To complete this Kata you need to make a function multiplyAll/multiply_all which
takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array
 multiplied by the integer.

Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.

Here's a nice Youtube video about currying,
which might help you if this is new to you.
*/
const multiplyAll = (arr) => (int) => arr.map((item) => item * int);
//</2>
