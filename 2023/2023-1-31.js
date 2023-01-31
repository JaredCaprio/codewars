/* <1>https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
Given a string, capitalize the letters that occupy even indexes and odd indexes 
separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for 
more examples.

The input will be a lowercase string with no spaces.
*/
function capitalize(s) {
  let result1 = "";
  let result2 = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result1 += s[i].toUpperCase();
      result2 += s[i];
    } else {
      result2 += s[i].toUpperCase();
      result1 += s[i];
    }
  }
  return [result1, result2];
}
//</1>
