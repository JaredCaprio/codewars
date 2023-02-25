/* <1> https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java)
for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Don't forget to rate this kata! Thanks :)
*/
String.prototype.camelCase = function () {
  if (this == "") return "";
  let output = "";
  let splitArr = this.trim().split(" ");
  console.log(splitArr);
  for (let i = 0; i < splitArr.length; i++) {
    output += splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
  }
  return output;
};
//</1>
