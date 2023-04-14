/* <1> https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript
Take a string and return a hash with all the ascii values of the characters in the string. 
Returns nil if the string is empty. The key is the character, and the value is the ascii 
value of the character. Repeated characters are to be ignored and non-alphebetic characters 
as well.
*/
function charToAscii(string) {
  if (string === "") return null;
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (/\W|\s/g.test(string[i])) {
      continue;
    } else {
      hash[string[i]] = string.charCodeAt(i);
    }
  }
  return hash;
}
//</1>
