/* <1> https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript
A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!
How many kookaburras are there?
Hint

The trick to counting kookaburras is to listen carefully
    The males sound like HaHaHa...

    The females sound like hahaha...

    And they always alternate male/female

Examples
    ha = female => 1
    Ha = male => 1
    Haha = male + female => 2
    haHa = female + male => 2
    hahahahaha = female => 1
    hahahahahaHaHaHa = female + male => 2
    HaHaHahahaHaHa = male + female + male => 3

^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/
var kookaCounter = function (laughing) {
  let currGender = "";
  let switchCount = 0;

  for (let i = 0; i < laughing.length; i += 2) {
    if (!currGender) {
      currGender = laughing[i];
      switchCount++;
    } else if (currGender !== laughing[i]) {
      currGender = laughing[i];
      switchCount++;
    }
  }
  return switchCount;
};
//</1>
