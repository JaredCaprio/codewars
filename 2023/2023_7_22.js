/* <1> https://www.codewars.com/kata/602db3215c22df000e8544f0/javascript
Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
Examples:

twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false

*/
function twoArePositive(a, b, c) {
  let pos = 0;
  let neg = 0;
  let args = Object.values(arguments);

  for (let i = 0; i < args.length; i++) {
    if (args[i] > 0) {
      pos++;
    } else if (args[i] < 0) {
      neg++;
    }
  }
  return pos === 2 && neg === 1 ? true : false;
}
//</1>
