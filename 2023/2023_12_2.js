/* <1>

*/

//PREP
//(arr: array of numbers with duplicates.  No letters, no special characters)
//return the sum of the numbers that only occur once in the array
//examples
console.log(repeats([1, 4, 3, 2, 3, 4, 1, 8]));

function repeats(arr) {
  const map = {};

  for (const num of arr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }
  let totalSum = 0;
  for (const key in map) {
    if (map[key] === 1) {
      totalSum += +key;
    }
  }

  return totalSum;
}

//</1>
