/* <1> https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
Your task is to remove all duplicate words from a string, leaving only single 
(first) words entries.

Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/
function removeDuplicateWords(s) {
  let split = s.split(" ");
  let set = new Set(split);
  return Array.from(set).join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
//</1>
