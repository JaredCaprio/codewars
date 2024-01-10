/*<1> https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

const spacify = (str) => str.split("").join(" ");

//test cases
console.log(spacify("hello world")); // "h e l l o   w o r l d";
console.log(spacify("1238942")); // "1 2 3 8 9 4 2"
console.log(spacify(""), "  ");
console.log(spacify("Kendamanomics")); // "K e n d a m a n o m i c s"
//</1>
