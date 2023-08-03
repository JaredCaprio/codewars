/* <1> https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input.
 Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).
Write a function where you will win the game if your numbers can spell "BINGO".
They do not need to be in the right order in the input array. Otherwise you will lose.
Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
  //init variables
  const bingo = "bingo";
  const charMap = {};

  //loop over bingo string to populate charMap
  for (let i = 0; i < bingo.length; i++) {
    charMap[bingo[i]] = bingo.charCodeAt(i) - 96;
  }
  //extract values from charMap
  let bingoArr = Object.values(charMap);

  //check if all values in bingoArr are present in input string
  let checker = (arr, target) => target.every((v) => arr.includes(v));

  return checker(a, bingoArr) ? "WIN" : "LOSE";
}
//</1>
