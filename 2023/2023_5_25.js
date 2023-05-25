/*<1> https://leetcode.com/problems/valid-palindrome/description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cs);
  let l = 0;
  let r = cs.length - 1;

  while (l <= r) {
    if (cs[l] === cs[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
//</1>
