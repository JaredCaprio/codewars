/* <1> https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript
Description:

Remove words from the sentence if they contain exactly one exclamation mark. 
Words are separated by a single space, without leading/trailing spaces.
Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(string) {
  if (string === "") return "";
  let splitStr = string.split(" ");
  return splitStr
    .filter((word) => {
      return word.match(/!/g)?.length !== 1;
    })
    .join(" ");
}
//</1>
