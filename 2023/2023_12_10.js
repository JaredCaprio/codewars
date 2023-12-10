/* <1> https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4/javascript
Write a function centroid(c) to calculate the centroid of 3D coordinates.

Return the results as a list of floats. Round the values to two decimal places.
*/

function centroid(c) {
  if (c.length === 0) return [];

  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;

  for (let i = 0; i < c.length; i++) {
    sumX += c[i][0];
    sumY += c[i][1];
    sumZ += c[i][2];
  }

  let len = c.length;
  let avgX = sumX / len;
  let avgY = sumY / len;
  let avgZ = sumZ / len;

  let outputArr = [avgX, avgY, avgZ];

  let finalOutput = [];
  for (let i = 0; i < outputArr.length; i++) {
    if (outputArr[i] % 1 === 0) {
      finalOutput.push(+outputArr[i]);
    } else {
      finalOutput.push(+outputArr[i].toFixed(2));
    }
  }
  return finalOutput;
}

//</1>
