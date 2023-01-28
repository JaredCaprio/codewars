/*<1> https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), 
returns the nth number in the Fibonacci Sequence.

For example:
nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each 
subsequent number is the sum of the previous two.
*/
function nthFibo(n) {
  let x, y, z, count;
  x = 0;
  y = 1;
  count = 1;
  while (count < n) {
    z = x + y;
    x = y;
    y = z;
    count++;
  }
  return x;
}
//<1>
//Tool
