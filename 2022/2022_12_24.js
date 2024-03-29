/*<1> https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"

Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"

What you need to think about is how to judge it correctly and effectively 
and don't forget isNaN().
*/
function whatNumberIsIt(n) {
  const maxValue = Number.MAX_VALUE;
  const minValue = Number.MIN_VALUE;
  const posInfinity = Number.POSITIVE_INFINITY;
  const negInfinity = Number.NEGATIVE_INFINITY;

  if (Number.isNaN(n)) return "Input number is Number.NaN";

  switch (n) {
    case maxValue:
      return `Input number is Number.MAX_VALUE`;
      break;
    case minValue:
      return `Input number is Number.MIN_VALUE`;
      break;
    case posInfinity:
      return `Input number is Number.POSITIVE_INFINITY`;
      break;
    case negInfinity:
      return `Input number is Number.NEGATIVE_INFINITY`;
      break;
    default:
      return `Input number is ${n}`;
  }
}
//</1>
