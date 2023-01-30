/*<1>https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle 
(starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = Math.pow(i, 3);
  }
  return result;
}
//</1>
