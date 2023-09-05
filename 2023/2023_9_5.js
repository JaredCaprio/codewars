/* <1> https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

"312" should return "333122"
"102269" should return "12222666666999999999"
*/

function explode(s) {
  //catch edge case of input being empty string
  if (s === "") return "";

  //init output arr var
  let res = [];

  //split the string
  let splitString = s.split("");

  //loop over split string adding repeated numbers to output var
  splitString.forEach((num) => res.push(num.repeat(Number.parseInt(num))));

  //return output var
  return res.join("");
}
//</1>
