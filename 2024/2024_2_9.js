/* <1> https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]

In the above example:

    the number 1 appears twice
    the number 2 appears once
    the number 3 appears three times

2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Here are more examples:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []

Are you up to the challenge?

*/

function oddOnesOut(nums) {
  //create object literal to count up occurrences
  let map = {};

  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }
  //loop over nums array and filter out odd numbers using the map
  const filtered = nums.filter((num, i, arr) => {
    if (map[num] % 2 === 0) {
      return +map[num];
    }
  });
  //return filtered array
  return filtered;
}

//test cases
console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(
  oddOnesOut([5, 5, 6, 2, 8, 1, 2, 9, 9, 8]),
  [5, 5, 2, 2, 8, 8, 9, 9]
);

//</1>
