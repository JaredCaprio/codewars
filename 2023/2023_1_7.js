/*<1> https://www.codewars.com/kata/52378b3ee72f21e1ea000045/train/javascript
The Math.min function has stopped working, so we have to use our own function. 
We are off to a good start, but this function doesn't seem to handle everything properly.
Add in the proper checks to return NaN for anything that isn't an actual number,
except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}
*/
function min(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  if (a === undefined || b === undefined) {
    return NaN;
  }

  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }
  return a < b ? a : b;
}
//</1>
