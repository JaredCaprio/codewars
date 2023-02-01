/* <1> https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
Are the numbers in order?

In this Kata, your function receives an array of integers as input. 
Your task is to determine whether the numbers are in ascending order. 
An array is said to be in ascending order if there are no two adjacent 
integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, 
i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be 
sorted in ascending order since all (zero) adjacent pairs of integers 
satisfy the condition that the left integer does not exceed the right 
integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers 
are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random 
tests, make sure you aren't mutating the input array.
*/
function inAscOrder(arr) {
  return arr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
}
//</1>

/* <2> https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript
Number is a palindrome if it is equal to the number with digits in reversed order. 
For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special 
steps needed to obtain a palindrome. The special step is: "reverse the digits, 
and add to the original number". If the resulting number is not a palindrome, 
repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
Example

For example, start with 87:
  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!

4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
Additional info
*/
var palindromeChainLength = function (n) {
  function isPalindrome(n) {
    return n === parseInt(n.toString().split("").reverse().join(""));
  }
  let stepCounter = 0;
  let currStepVal = n;
  while (!isPalindrome(currStepVal)) {
    currStepVal =
      currStepVal +
      parseInt(currStepVal.toString().split("").reverse().join(""));

    stepCounter++;
  }
  return stepCounter;
};
//</2>
