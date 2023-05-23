/* <1>https://leetcode.com/problems/longest-common-prefix/?envType=study-plan-v2&id=top-interview-150
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. 

Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }
  let res = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(res) != 0) {
      res = res.substring(0, res.length - 1);
    }
  }
  return res;
};
//</1>
