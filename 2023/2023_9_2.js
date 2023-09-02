/* <1> https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco unnecessarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.
*/
function tacofy(word) {
  let lowerWord = word.toLowerCase();
  let res = [];
  res.push("shell");
  for (let i = 0; i < lowerWord.length; i++) {
    switch (true) {
      case /[aeiou]/g.test(lowerWord[i]):
        res.push("beef");
        break;
      case lowerWord[i] === "t":
        res.push("tomato");
        break;
      case lowerWord[i] === "l":
        res.push("lettuce");
        break;
      case lowerWord[i] === "g":
        res.push("guacamole");
        break;
      case lowerWord[i] === "c":
        res.push("cheese");
        break;
      case lowerWord[i] === "s":
        res.push("salsa");
        break;
    }
  }
  res.push("shell");
  return res;
}
//</1>
