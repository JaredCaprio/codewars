/* <1> https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/
function convertHashToArray(hash) {
  let output = [];
  for (const key in hash) {
    output.unshift([key, hash[key]]);
  }
  return output.sort();
}
//</1>
