/* <1> https://leetcode.com/problems/spiral-matrix-ii/description/
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in 
spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]]

 

Constraints:
    1 <= n <= 20
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  function create2DGrid(size) {
    let i = size;
    const grid = [];
    while (i--) grid.push(new Array(size));
    return grid;
  }

  function createSpiral(n) {
    const spiral = create2DGrid(n);
    let currentNumber = 1;
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;

    while (currentNumber <= n * n) {
      spiral[i][j] = currentNumber++;

      if (
        j + dj === n ||
        i + di === n ||
        j + dj === -1 ||
        spiral[i + di][j + dj]
      ) {
        const tmpDi = di;
        di = dj;
        dj = -tmpDi;
      }
      i += di;
      j += dj;
    }

    return spiral;
  }
  return createSpiral(n);
};
//</1>
