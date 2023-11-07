/* <1>https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
Input >> Output Examples

adjacentElementsProduct([1, 2, 3]); ==> return 6

Explanation:

    The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

    Explanation:

Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

Explanation:

    The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
function adjacentElementsProduct(array) {
  let output;
  let p1 = 0;
  let p2 = 1;

  while (p2 < array.length) {
    let curMul = array[p1] * array[p2];
    if (curMul > output || output === undefined) {
      output = curMul;
    }
    p1++;
    p2++;
  }

  return output;
}
//</1>
