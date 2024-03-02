/* <1> 20. Valid Parentheses | https://leetcode.com/problems/valid-parentheses/description/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

// 1. Create a function that takes in a string of only the character "(" ,")", "{" ,"}", "[","]".
// 2. Return true if the parentheses in the input string are valid
//  Parentheses are valid when they close in the same order they were opened
//  every opening bracket has a corresponding closing bracket of the same type
//  open brackets must be closed by the same type of brackets

//example
// (()){[]} => true
// ([]] => false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	//Create a map of all the valid characters
	//where the key is the opening bracket and the value is closing
	const braceMap = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	//create stack to keep track of bracket pairs
	const stack = [];

	//loop over the input string, checking if the current char is in the valid character map
	for (const brace of s) {
		if (brace in braceMap) {
			//if it is in the map, that means its an opening bracket so push to the stack
			stack.push(braceMap[brace]);
			continue;
		}

		//if the last item on the stack isn't equal to the current brace, return false
		if (brace !== stack.pop()) {
			return false;
		}
	}

	//check if the length of the stack is 0
	return stack.length === 0;
};

//Test Cases
console.log(isValid('(()){[]}'));
console.log(isValid('(()[}}'));

//</1>
