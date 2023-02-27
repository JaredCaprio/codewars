/* <1>https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.
*/
function capitalize(s, arr) {
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      output += s.charAt(i).toUpperCase();
    } else {
      output += s.charAt(i);
    }
  }
  return output;
}
//</1>
