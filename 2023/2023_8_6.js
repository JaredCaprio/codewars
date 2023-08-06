/* <1> https://www.codewars.com/kata/5889177bf148eddd150002cc/javascript
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

    If a letter is a upper case consonants, replace that character with "Iron".
    If a letter is a lower case consonants or a non-alpha character, do nothing to that character
    If a letter is a upper case vowel, replace that character with "Iron Yard".
    If a letter is a lower case vowel, replace that character with "Yard".

Ready?
*/
function tiyFizzBuzz(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res = "";

  for (let i = 0; i < sentence.length; i++) {
    let curLet = sentence[i];

    if (curLet.match(/\W|\d/)) {
      res += curLet;
    } else if (curLet === curLet.toLowerCase() && vowels.includes(curLet)) {
      res += "Yard";
    } else if (curLet === curLet.toUpperCase() && vowels.includes(curLet)) {
      res += "Iron Yard";
    } else if (curLet === curLet.toUpperCase() && !vowels.includes(curLet)) {
      res += "Iron";
    } else {
      res += curLet;
    }
  }
  return res;
}
//</1>
