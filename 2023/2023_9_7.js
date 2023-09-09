/* <1> https://www.codewars.com/kata/latest/my-languages?beta=false
Complete the function which will return the area of a circle with the given radius.

Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false

*/
var circleArea = function (radius) {
  if (radius <= 0) return false;
  let area = Math.PI * radius ** 2;
  return area.toFixed(2);
};
//</1>
