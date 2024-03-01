/* https://leetcode.com/problems/valid-parentheses/description/
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

//function that takes in a string of parentheses / square brackets / curly brackets
//function will only take in string, no booleans, no numbers, no arrays, no objects
//function must return true if the parentheses passed in are valid and false if they are not.

var isValid = function (s) {
	if (s.length % 2 !== 0) {
		return false;
	}
	// create a map of valid characters
	const braceMap = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	//create a stack
	const stack = [];

	//loop over the input string, checking if its corresponding brace is in the map
	for (const brace of s) {
		//if it is in the map, push it to the stack
		if (brace in braceMap) {
			stack.push(braceMap[brace]);
			continue;
		}

		//if the last item in the stack doesn't match the current brace
		if (brace !== stack.pop()) {
			return false;
		}
	}

	//check if len of stack is 0 then return true
	return stack.length === 0;
};

//test cases
console.log(isValid('(())'));
console.log(isValid('{}{{}{(()}'));
