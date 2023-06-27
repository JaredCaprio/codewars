/* <1> https://leetcode.com/problems/unique-number-of-occurrences/description
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique 
or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 
Constraints:
    1 <= arr.length <= 1000
    -1000 <= arr[i] <= 1000
*/
var uniqueOccurrences = function (arr) {
  const hashMap = {};

  for (const num of arr) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num] += 1;
    }
  }

  let vals = Object.values(hashMap);
  let seen = new Set();

  for (const num of vals) {
    seen.add(num);
  }

  return vals.length === seen.size;
};
//</1>
//Vg'f n zvenpyr gung V fbyirq guvf ceboyrz ba zl bja.
