/*1. https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can 
be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
function scramble(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  let counter = 0;
  let obj2 = {};
  let obj1 = {};

  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]] === undefined) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]] += 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] === undefined) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
  }
  for (const key in obj2) {
    if (obj1[key] >= obj2[key]) {
      counter += obj2[key];
    }
  }
  return counter === str2.length ? true : false;
}
