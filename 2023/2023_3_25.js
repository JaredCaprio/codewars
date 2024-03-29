/* <1> https://www.codewars.com/kata/586538146b56991861000293/train/javascript
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:
If, you can read?

Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
    There are preloaded dictionary you can use, named NATO
    The set of used punctuation is ,.!?.
    Punctuation should be kept in your return string, but spaces should not.
    Xray should not have a dash within.
    Every word and punctuation mark should be seperated by a space ' '.
    There should be no trailing whitespace
*/
const NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu",
};
function to_nato(words) {
  words = words.toLowerCase();
  let output = [];
  for (let i = 0; i < words.length; i++) {
    if (NATO[words[i].toLowerCase()] != undefined) {
      output.push(NATO[words[i]]);
    } else if (/[.,?!]/g.test(words[i])) {
      output.push(words[i]);
    }
  }
  return output.join(" ");
}
//</1>
