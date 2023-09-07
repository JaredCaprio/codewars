/* <1>

Complete the function which will return the area of a circle with the given radius.

Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false



*/

//Parameters: (radius: a positive integer)
//Return false if radius is less than or equal to zero
//Examples

var circleArea = function (radius) {
  if (radius <= 0) return false;
  let area = Math.PI * radius ** 2;
  return area.toFixed(2);
};

console.log(circleArea(43.2673));
console.log(circleArea(68));
console.log(circleArea(-1485.86));
console.log(circleArea(53));
console.log(circleArea(0));

//</1>
