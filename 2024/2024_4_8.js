/* <1> https://www.codewars.com/kata/55f8b5b09ec923860200000f/javascript

Your function takes in parameter an array of integers nums and a strictly-positive integer k.

Imagine a sliding window of size k which is moving from left to right in the array. You can only see the k elements that are in the window. The sliding window moves right by one position until it is no longer possible to have k elements in the window. You have to return an array of the maximums for each successive window, from left to right.
Detailed Example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

(nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

More examples:

(nums = [1, 2, 3, 4], k = 1) ---> [1, 2, 3, 4]
(nums = [1, 2, 3, 4], k = 2) ---> [2, 3, 4]
(nums = [1, 2, 3, 4], k = 3) ---> [3, 4]
(nums = [1, 2, 3, 4], k = 4) ---> [4]
(nums = [1, 2, 3, 4], k = 5) ---> [] because k is larger than the length of nums
*/

function sliding(nums, k) {
  const result = [];

  let l = 0;
  let r = k - 1;

  while (r < nums.length) {
    let max = -Infinity;
    for (let i = l; i <= r; i++) {
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    result.push(max);
    l++;
    r++;
  }
  return result;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(sliding(nums, k));
//</1>
