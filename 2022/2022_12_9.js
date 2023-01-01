/*1. https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please)
 in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
 the pair whose second element has the smallest index is the solution.
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
 Be sure your code doesn't time out.
*/

function sumPairs(ints, s) {
  let lastNumber;

  for (let i = 1; i < ints.length; i++) {
    if (lastNumber && lastNumber === ints[i]) {
      continue;
    }
    lastNumber = ints[i];

    const sliced = ints.slice(0, i);
    console.log(sliced);
    const sumIndex = sliced.indexOf(s - ints[i]);
    console.log(sumIndex);

    if (sumIndex !== -1) {
      return [sliced[sumIndex], ints[i]];
    }
  }
}
