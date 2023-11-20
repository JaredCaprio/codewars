/*<1> https://www.codewars.com/kata/551204b7509063d9ba000b45/train/javascript
Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

  [[1, 0], [0, 1]] should return 1
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

http://en.wikipedia.org/wiki/Main_diagonal
*/

function mainDiagonalProduct(mat) {
  let j = 0;
  let total = 1;
  for (let i = 0; i < mat.length; i++) {
    total *= mat[i][j];
    j++;
  }
  return total;
}
//</1>
