/* <1> https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
Your task is to remove all consecutive duplicate words from a string, leaving only 
first words entries.
For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/
const removeConsecutiveDuplicates = (s) => {
  let split = s.split(" ");
  let output = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== split[i + 1]) {
      output.push(split[i]);
    }
  }
  return output.join(" ");
};
//</1>
