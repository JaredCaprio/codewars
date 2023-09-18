/* <1> https://www.codewars.com/kata/564fa92d1639fbefae00009d/train/javascript
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
*/
const factors = (number) => {
  if (number < 1 || !Number.isInteger(number)) {
    return -1;
  }
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr.sort((a, b) => b - a);
};
//</1>
