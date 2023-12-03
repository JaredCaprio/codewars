/* <1> https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/
function solution(pairs) {
  //create output array
  var output = [];
  //iterate over the input object (pairs)
  //push each key value pair onto output array
  for (const key in pairs) {
    output.push(`${key} = ${pairs[key]}`);
  }
  //join with comma and return output array
  return output.join(",");
}
//</1>
