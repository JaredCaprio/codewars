/* <1> https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  //create hash map (object literal) or how many times each number appears in the array
  let map = {};
  for (const num of arr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  //return the highest occurring number
  let highest = [];

  for (var num in map) {
    highest.push([num, map[num]]);
  }

  let sortedOne = highest.sort((a, b) => b[0] - a[0]);
  let sortedTwo = sortedOne.sort((a, b) => b[1] - a[1]);
  return +sortedTwo[0][0];
}

//</1>
