/*<1> https://www.codewars.com/kata/5b715fd11db5ce5912000019/train/javascript
Ronny the robot is watching someone perform the Cups and Balls magic trick. 
The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), 
he then mixes all the cups around by performing multiple two-cup switches (arr).
 Ronny can record the switches but can't work out where the ball is. Write a programme
  to help him do this.

Rules:

    There will only ever be three cups.
    Only two cups will be swapped at a time.
    The cups and their switches will be refered to by their index in a row of three, beginning at one. 
    So [[1,2]] means the cup at position one, is swapped with the cup at position two.
    Arr will be an array of integers 1 - 3 organised in pairs.
    There won't be any empty sub-arrays.
    If arr is just an empty array b should be returned.
*/
//</1>
function cupAndBalls(b, arr) {
  let ballLoc = b;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(ballLoc)) {
      if (arr[i][0] === ballLoc) {
        ballLoc = arr[i][1];
      } else if (arr[i][1] === ballLoc) {
        ballLoc = arr[i][0];
      }
    }
  }
  return ballLoc;
}
