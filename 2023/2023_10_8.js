/* <1> https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript
Compare two strings by comparing the sum of their values (ASCII character code).

    For comparing treat all letters as UpperCase
    null/NULL/Nil/None should be treated as empty strings
    If the string contains other characters than letters, treat the whole string as it would be empty

Your method should return true, if the strings are equal and false if they are not equal.
Examples:

"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/
function compare(s1, s2) {
  let regex = /[^a-zA-Z]/g;
  if (regex.test(s1) || s1 === null) s1 = "";
  if (regex.test(s2) || s2 === null) s2 = "";
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();

  let s1Sum = 0,
    s2Sum = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Sum += s1.charCodeAt(i);
  }
  for (let i = 0; i < s2.length; i++) {
    s2Sum += s2.charCodeAt(i);
  }
  return s1Sum === s2Sum;
}
//</1>
