/*<1>https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
back·ro·nym

An acronym deliberately formed from a phrase whose initial letters spell out a particular word or 
words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON

(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a 
backronym, using the preloaded dictionary and return a string of words, separated with a single 
space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined 
words, for example:

dict["P"] == "perfect"

Examples

"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
*/
//preload variable: dict
const dict = {
  A: "awesome",
  B: "beautiful",
  C: "confident",
  D: "disturbing",
  E: "eager",
  F: "fantastic",
  G: "gregarious",
  H: "hippy",
  I: "ingestable",
  J: "joke",
  K: "klingon",
  L: "literal",
  M: "mustache",
  N: "newtonian",
  O: "oscillating",
  P: "perfect",
  Q: "queen",
  R: "rant",
  S: "stylish",
  T: "turn",
  U: "underlying",
  V: "volcano",
  W: "weird",
  X: "xylophone",
  Y: "yogic",
  Z: "zero",
};
var makeBackronym = function (string) {
  let result = [];
  string.split("").forEach((letter) => {
    result.push(dict[letter.toUpperCase()]);
  });
  return result.join(" ");
};
//</1>
