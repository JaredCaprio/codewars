/* <1> https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/javascript
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in 
the top left.

For example n = 3 result in:
"I\n I\n  I"

or printed:
I
 I
  I

Another example, a 7-step stairs should be drawn like this:
I
 I
  I
   I
    I
     I
      I
*/

//PREP
//P
//Parameter (n: number of stairs wide and tall, always a positive integer)

//R
//Using the letter 'I', whitespace, and \n to create a stair case and return it

//E
console.log(drawStairs(3));
console.log(drawStairs(7));
console.log(drawStairs(10));
console.log(drawStairs(1));

//P
//create loop ending at n, concat to a result array \n and spaces each iteration

//then return result array joined together

function drawStairs(n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      res.push(" ".repeat(i - 1));
      res.push("I");
    } else {
      res.push(" ".repeat(i - 1));
      res.push("I\n");
    }
  }
  return res.join("");
}
//</1>
