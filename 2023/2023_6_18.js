/* <1> https://leetcode.com/problems/reverse-vowels-of-a-string/description
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
and upper cases, more than once. 

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede" 

Constraints:
  1 <= s.length <= 3 * 105
  s consist of printable ASCII characters.
*/

const reverseVowels = (s) => {
  const vow = {};

  for (const char of "aeiouAEIOU") {
    vow[char] = true;
  }

  const chars = s.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !(s[left] in vow)) {
      left++;
    }
    while (left < right && !(s[right] in vow)) {
      right--;
    }

    swap(chars, left, right);
    left++;
    right--;
  }
  return chars.join("");
};

function swap(arr, i, j) {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//</1>
