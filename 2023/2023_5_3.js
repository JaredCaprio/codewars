/*<1> https://leetcode.com/problems/roman-to-integer/
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, 
the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to 
the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. 

Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
let charMap = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let totalVal = 0;

  s.split("").forEach((roman, i, a) => {
    if (charMap[roman] < charMap[a[i + 1]]) {
      totalVal -= charMap[roman];
    } else if (charMap[roman] > charMap[a[i + 1]]) {
      totalVal += charMap[roman];
    } else {
      totalVal += charMap[roman];
    }
  });
  return totalVal;
};
//</1>

/*<2> https://leetcode.com/problems/find-the-difference-of-two-arrays/
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order. 

Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. 
Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. 
Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included 
once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

Constraints:
    1 <= nums1.length, nums2.length <= 1000
    -1000 <= nums1[i], nums2[i] <= 1000
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let number1Diffs = [];
  let number2Diffs = [];
  nums1.forEach((val, i) => {
    if (!nums2.includes(val) && !number1Diffs.includes(val)) {
      number1Diffs.push(val);
    }
  });
  nums2.forEach((val, i) => {
    if (!nums1.includes(val) && !number2Diffs.includes(val)) {
      number2Diffs.push(val);
    }
  });
  return [number1Diffs, number2Diffs];
};
//</2>
