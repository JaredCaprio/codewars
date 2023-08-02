/* <1>

*/

//PREP

//P (text: string to mod, n: replace every nth letter with newVal,
// oldValue: the letter to be replaced, newValue: letter to replace)

//R
//return modified string

//E

console.log(replaceNth("Vader said: No, I am your father!", 2, "a", "o"));

function replaceNth(text, n, oldValue, newValue) {
  //handle edge case of 0 or negative input
  if (n <= 0) return text;

  // create couter var to keep track of every occurence of old val
  let counter = 0;
  let newStr = "";

  //loop over string
  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldValue && counter === n - 1) {
      newStr += newValue;
      counter = 0;
    } else if (text[i] === oldValue) {
      newStr += text[i];
      counter++;
    } else {
      newStr += text[i];
    }
  }
  return newStr;
  //return new string
}
//</1>
