/*<1> https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions 
(which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.
Example:

_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/
function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}
//</1>

/*<2> https://www.codewars.com/kata/56a6ce697c05fb4667000029/train/javascript
There were and still are many problem in CW about palindrome numbers and palindrome strings.
 We suposse that you know which kind of numbers they are. If not, you may search about them
  using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function
 next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

Let's see:

For Javascript
nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552

You will be receiving values higher than 10, all valid.
*/
function nextPal(val) {
  let isPal = false;
  let count = val;
  while (!isPal) {
    count++;
    if (count.toString().split("").reverse().join("") == count) {
      isPal = true;
      return count;
    }
  }
}
//</2>
