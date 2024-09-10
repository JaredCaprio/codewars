/*  https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript Find the Missing Number
This question is a variation on the Arithmetic Progression kata

The following was a question that I received during a technical interview for an entry level
 software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. 
However, one number is missing. Write a function to find and return this number.
What are the time and space complexities of your solution?
*/

function missingNo(nums) {
	const newArr = nums.sort((a, b) => a - b);
	if (newArr[0] === 1) {
		return 0;
	} else if (newArr[newArr.length - 1] === 99) {
		return 100;
	}

	for (let i = 0; i <= newArr.length - 1; i++) {
		if (newArr[i + 1] - newArr[i] > 1) {
			return newArr[i] + 1;
		}
	}
	return 'No missing numbers';
}

//Test case
console.log(
	missingNo([
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
		40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
		59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
		78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
		97, 98, 99,
	]),
	'EXPECTED OUTPUT: 100',
);
