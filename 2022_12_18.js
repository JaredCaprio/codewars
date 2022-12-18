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
console.log(getSum(0, 1), "output");
//</1>
