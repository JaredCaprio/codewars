/*<1>  https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!

*/

function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let output = [];
  for (let i = 0; i <= arr.length; i++) {
    let currMax = Math.max(...sorted);
    sorted.pop();
    let currMin = Math.min(...sorted);
    sorted.shift();

    output.push(currMax, currMin);
  }

  if (sorted.length > 1) {
    output.push(Math.max(...sorted));
    output.push(Math.min(...sorted));
  } else if (sorted.length === 1) {
    output.push(...sorted);
  }

  return output;
}
//</1>
