/* <1> https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
For a given string s find the character c (or C) with longest consecutive 
repetition and return:

[c, l]

where l (or L) is the length of the repetition. If there are two or more characters with 
the same l return the first in order of appearance.

For empty string return:
["", 0]

In JavaScript: If you use Array.sort in your solution, you might experience issues with the 
random tests as Array.sort is not stable in the Node.js version used by CodeWars. 
This is not a kata issue.

Happy coding! :)
*/
function longestRepetition(s) {
  let temp = ["", 0];
  let count = 1;
  let highest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > highest) {
        highest = count;
        console.log(s[i]);
        temp = [s[i], highest];
      }
      count = 1;
    }
  }
  return temp;
}
//</1>
