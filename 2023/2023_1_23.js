/* <1> https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
function sameCase(a, b) {
  if (!/[a-zA-Z]/g.test(a) || !/[a-zA-Z]/g.test(b)) return -1;
  let aIsLower = false;
  let bIsLower = false;
  if (a === a.toLowerCase()) {
    aIsLower = true;
  }
  if (b === b.toLowerCase()) {
    bIsLower = true;
  }
  return bIsLower === aIsLower ? 1 : 0;
}
//</1>
