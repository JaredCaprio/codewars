/* <1> https://www.codewars.com/kata/583df40bf30065fa9900010c/train/javascript
Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y).
The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. 
Otherwise the function should return -1.

getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of 
the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the 
mean of those 2 means is (2+3)/2=2.5.

getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.
*/
function getMean(arr, x, y) {
  if (x > arr.length || y > arr.length || x <= 1 || y <= 1) {
    return -1;
  }

  function findMean(len, arr, atStart) {
    if (atStart) {
      let sum = arr.slice(0, len).reduce((acc, curr) => acc + curr, 0);

      return sum / len;
    } else if (!atStart) {
      let sum = arr.slice(-len).reduce((acc, curr) => acc + curr, 0);
      return sum / len;
    }
  }

  let xMean = findMean(x, arr, true);
  let yMean = findMean(y, arr, false);

  return (yMean + xMean) / 2;
}
//</1>
