/*<1>https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and
Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, 
will return the correct alias.
Notes:
Two objects that return a one word name in response to the first letter of the first
name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter
from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your
function should accommodate for these grammatical errors.
*/
function aliasGen(fN, lN) {
  if (!fN[0].match(/[a-zA-Z]/) || !lN[0].match(/[a-zA-Z]/)) {
    return "Your name must start with a letter from A - Z.";
  }
  let aFn = fN.toUpperCase().slice(0, 1);
  let aLn = lN.toUpperCase().slice(0, 1);

  return [firstName[aFn], surname[aLn]];
}
//</1>
