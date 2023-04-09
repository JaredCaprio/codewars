/* <1>https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min 
will cause no integer overflow.

*/
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
//</1>

/* <2>https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript
Fix My Phone Numbers

Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
The Format

Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and 
some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!'
and there are lots more lines that we need to check.
The Task

*/
function isItANum(str) {
  const filteredNum = str
    .split("")
    .filter((char) => {
      return /\d/g.test(char);
    })
    .join("");

  return filteredNum.length === 11 && filteredNum[0] === "0"
    ? filteredNum
    : "Not a phone number";
}
//<2>
