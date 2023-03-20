/* <1>https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/
class Class {
  static getNumber() {
    if (!Class.currentNum) {
      Class.currentNum = 1;
    } else {
      Class.currentNum *= 2;
    }
    return Class.currentNum;
  }
}
//</1>

/* <2>https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
Task

Given a Divisor and a Bound , Find the largest integer N , Such That ,
Conditions :

N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes

The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples

maxMultiple (2,7) ==> return (6)

Explanation:

(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)

Explanation:

(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)

Explanation:

(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
*/
function maxMultiple(divisor, bound) {
  for (let i = bound; i > divisor; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
//</2>
