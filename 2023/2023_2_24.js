/* <1> https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/
function sumNoDuplicates(numList) {
  let charMap = {};

  for (let i = 0; i < numList.length; i++) {
    if (!charMap[numList[i]]) {
      charMap[numList[i]] = 1;
    } else {
      charMap[numList[i]] += 1;
    }
  }
  console.log(charMap);
  let output = 0;
  for (const num in charMap) {
    if (charMap[num] < 2) {
      output += parseInt(num);
    }
  }
  return output;
}
//</1>
