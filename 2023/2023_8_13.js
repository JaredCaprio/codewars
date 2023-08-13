/* <1> https://www.codewars.com/kata/62cecd4e5487c10028996e04/train/javascript
The organizers want a podium that satisfies:

    The first place platform has the minimum height possible
    The second place platform has the closest height to first place
    All platforms have heights greater than zero.

Task

Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
Examples (input -> output)

11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]
*/
function racePodium(blocks) {
  let second = (blocks / 3 + 2 / 3) | 0;
  let first = second + 1;
  let third = blocks - second - first;

  if (blocks === 7) {
    return [2, 4, 1];
  }
  return [second, first, third];
}
//</1>
