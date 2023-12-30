/* <1> https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

This is a modification on the Kata: Array2Binary addition hope you like it.
*/

const arr2bin = (arr, sanitizedArr = []) => {
  arr.forEach((num) => {
    if (typeof num === "number") {
      sanitizedArr.push(num);
    } else {
      sanitizedArr.push(0);
    }
  });
  return sanitizedArr.reduce((a, b) => a + b, 0).toString(2);
};
console.log(arr2bin([1, 2]), "11");
//</1>
