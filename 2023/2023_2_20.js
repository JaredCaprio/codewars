/* <1> 

 */
function firstNonRepeated(s) {
  s = s.split(" ").join("");
  let charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) {
      charMap[s[i]] = 1;
    } else {
      charMap[s[i]] += 1;
    }
  }
  console.log(charMap);
  for (const key in charMap) {
    if (charMap[key] == 1) {
      return key;
    }
  }
  return null;
}

console.log(firstNonRepeated("test"));
//</1>

//edge cases
// -if intput is null return null
// -if all chars are unique return first char
// -if all chars are repeated return null
