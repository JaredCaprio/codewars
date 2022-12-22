/*<1> https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript

// Create a function called args_count that returns the number of arguments provided
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/
function args_count() {
  return arguments.length;
}
//</1>

/*<2> https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
 continue reducing in this way until a single-digit number is produced. 
 The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
function digitalRoot(n, temp) {
  if (n.toString().length > 1) {
    temp = n
      .toString()
      .split("")
      .map((number) => parseInt(number))
      .reduce((a, b) => a + b);
    return digitalRoot(temp);
  } else {
    return n;
  }
}
//</2>
