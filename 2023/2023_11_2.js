/* <1> https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript
Get the next prime number!

You will get a number n (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.
Examples

5   =>  7
12  =>  13
*/
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function nextPrime(n) {
  let curNum = n + 1;

  while (!isPrime(curNum)) {
    curNum++;
  }
  return curNum;
}
//</1>
