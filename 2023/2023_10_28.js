/* <1> https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript
Count how often sign changes in array.
result

number from 0 to ... . Empty array returns 0
example

const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;


*/
function catchSignChange(arr, changes = 0) {
  let isPos = arr[0] >= 0 ? true : false;

  //Iterate over arr and store number of sign changes in changes variable
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= 0 && !isPos) {
      isPos = true;
      changes++;
    } else if (arr[i] < 0 && isPos) {
      isPos = false;
      changes++;
    }
  }

  return changes;
}

//</1>
