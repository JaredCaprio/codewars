/* <1> https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2

Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/

function nthChar(words) {
  let output = "";
  for (let i = 0; i < words.length; i++) {
    output += words[i][i];
  }

  return output;
}

console.log(nthChar(["yoda", "best", "has"]));
//</1>
