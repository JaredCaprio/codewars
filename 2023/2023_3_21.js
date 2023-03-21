/* <1>https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. 
If the two words are the same, return True.

*/
var mispelled = function (word1, word2) {
  const grid = [];

  for (let i = 0; i < word1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < word2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    grid.push(row);
  }
  console.log(grid);
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        grid[i][j] =
          1 + Math.min(grid[i - 1][j], grid[i][j - 1], grid[i - 1][j - 1]);
      }
    }
  }
  return grid[word1.length][word2.length] > 1 ? false : true;
};
//</1>
