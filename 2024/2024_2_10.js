/* <1> https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Return the given string with the letter of each word capitalized or the first letter if the word
only has one letter.  If an empty string is passed in then return an empty string
*/
function testit(s) {
  if (s.length === 0) return "";
  //split the string by spaces
  let words = s.split(" ");
  //loop over each word and capitalize the last digit of that word
  for (let i = 0; i < words.length; i++) {
    const last = words[i].slice(-1);
    const first = words[i].slice(0, -1);
    words[i] = first + last.toUpperCase();
    console.log(first);
  }
  //return altered string
  return words.join(" ");
}

//test cases
console.log(testit("a b c d"));
console.log(testit("butt drugs rock"));
console.log(testit("a"));
//</1>
