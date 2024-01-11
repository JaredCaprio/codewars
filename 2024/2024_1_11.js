/*<1> https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
All inputs will be valid.
*/
function switcher(x) {
  //hash map (object)
  //string output var
  let map = { 27: "!", 28: "?", 29: " " };
  let output = "";

  //populate hash map using a loop and ASCII charCodes
  let j = 1;
  for (let i = 122; i >= 97; i--) {
    map[j] = String.fromCharCode(i);
    j++;
  }
  console.log(map);
  //loop over input array, using map to convert each number to its corresponding letter
  //concatenating to the output string on each iteration
  x.forEach((num) => {
    output += map[num];
  });

  //return output string
  return output;
}
//</1>
