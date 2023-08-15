/* <1> https://www.codewars.com/kata/5a092d9e46d843b9db000064/javascript
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
*/
function solve(arr) {
  const posNum = new Set();

  for (const num of arr) {
    if (num > 0) {
      if (posNum.has(-num)) {
        posNum.delete(-num);
      } else {
        posNum.add(num);
      }
    } else if (num < 0) {
      if (posNum.has(-num)) {
        posNum.delete(-num);
      } else {
        posNum.add(num);
      }
    }
  }
  return posNum.values().next().value;
}
//</1>
