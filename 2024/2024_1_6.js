/* <1>
Practicing algos
    Binary Search

*/
//search through a sorted array of numbers for a target

//create two pointers: start and end

//find middle value each iteration and adjust pointers based on which half of the array the target is in

//return the middle variable once target === array[middle]

//otherwise return -1 if target is not present in array

const binarySearch = (target, array) => {
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 <= p2) {
    const middle = Math.floor((p1 + p2) / 2);

    if (target === array[middle]) {
      return middle;
    } else if (target < array[middle]) {
      p2 = middle - 1;
    } else {
      p1 = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(16, [1, 4, 7, 8, 10, 12, 14, 16, 17, 20]));
//</1>
