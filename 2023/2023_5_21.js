/* <1>https://leetcode.com/problems/majority-element/?envType=study-plan-v2&id=top-interview-150
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let maxCount = 0;
  let obj = {};

  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (let j in obj) {
    if (obj[j] > count) {
      count = obj[j];
      maxCount = j;
    }
  }
  return maxCount;
};
//</1>
