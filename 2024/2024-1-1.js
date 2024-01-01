/* <1> https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/
const arrCheck = (value, isArray = []) => {
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      isArray.push(true);
    } else {
      isArray.push(false);
    }
  }

  return isArray.every((val) => val === true);
};
//</1>
