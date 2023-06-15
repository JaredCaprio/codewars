/* <1> https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.

 
Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false


Constraints:
    2 <= coordinates.length <= 1000
    coordinates[i].length == 2
    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
    coordinates contains no duplicate point.

*/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (crds) {
  if (crds.length === 2) {
    return true;
  }

  let x1 = crds[0][0];
  let x2 = crds[1][0];
  let y1 = crds[0][1];
  let y2 = crds[1][1];

  if (x2 === x1) {
    for (let i = 2; i < crds.length; i++) {
      if (crds[i][0] !== x1) {
        return false;
      }
    }
    return true;
  }

  let slope = (y1 - y2) / (x1 - x2);

  for (let i = 2; i < crds.length; i++) {
    let currentSlope =
      (crds[i][1] - crds[i - 1][1]) / (crds[i][0] - crds[i - 1][0]);
    if (slope !== currentSlope) {
      return false;
    }
  }
  return true;
};
//</1>
