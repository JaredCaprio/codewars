/*<1> https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same 
character, but the function should return the correct case for the initial 
letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty 
string ("") or None -- see sample tests.
*/
function firstNonRepeatingLetter(s) {
  let letterMap = {};
  for (let i = 0; i < s.length; i++) {
    let lS = s.toLowerCase();
    if (!letterMap[lS[i]]) {
      letterMap[lS[i]] = 1;
    } else {
      letterMap[lS[i]] += 1;
    }
  }
  for (const letter in letterMap) {
    if (letterMap[letter] === 1) {
      let iOfS = s.toLowerCase().split("").indexOf(letter);
      return s[iOfS];
    }
  }
  return "";
}
//</1>
