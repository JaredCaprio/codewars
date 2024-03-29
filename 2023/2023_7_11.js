/* <1> https://leetcode.com/problems/longest-palindromic-substring/description/
Given a string s, return the longest
palindromic
substring
in s.


Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb" 

Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPal = expandFromCenter(s, i, i);
    let evenPal = expandFromCenter(s, i - 1, i);

    if (oddPal.length > longest.length) {
      longest = oddPal;
    }

    if (evenPal.length > longest.length) {
      longest = evenPal;
    }
  }
  return longest;
};

function expandFromCenter(str, left, right) {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
}

console.log(longestPalindrome("abba"));
//</1>
