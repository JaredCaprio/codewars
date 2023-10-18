/* <1> https://www.codewars.com/kata/5a6225e5d8e145b540000127/train/javascript
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

More examples in the test cases.

Good luck!
*/
function common(...arrays) {
  if (arrays.length < 2) {
    throw new Error(
      "At least two arrays are required for finding common elements."
    );
  }

  const elementCounts = new Map();
  const commonElements = [];

  // Count occurrences of elements in the first array
  for (const element of arrays[0]) {
    if (!elementCounts.has(element)) {
      elementCounts.set(element, 1);
    } else {
      elementCounts.set(element, elementCounts.get(element) + 1);
    }
  }

  // Check the remaining arrays and update counts
  for (let i = 1; i < arrays.length; i++) {
    const array = arrays[i];
    const arrayElementCounts = new Map();

    for (const element of array) {
      if (!arrayElementCounts.has(element)) {
        arrayElementCounts.set(element, 1);
      } else {
        arrayElementCounts.set(element, arrayElementCounts.get(element) + 1);
      }
    }

    for (const [element, count] of elementCounts) {
      if (arrayElementCounts.has(element)) {
        const minCount = Math.min(count, arrayElementCounts.get(element));
        elementCounts.set(element, minCount);
      } else {
        elementCounts.delete(element);
      }
    }
  }

  // Create the common elements array based on counts
  for (const [element, count] of elementCounts) {
    commonElements.push(...Array(count).fill(Number(element)));
  }

  return commonElements.reduce((cum, cur) => cum + cur);
}

//</1>
