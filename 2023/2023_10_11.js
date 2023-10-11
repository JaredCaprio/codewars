/* <1> https://www.codewars.com/kata/58f6024e1e26ec376900004f/train/javascript
In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/
function factors(number, limit) {
  if (limit > number) return [];
  const listOfFactors = [...Array(number + 1).keys()].filter(
    (i) => number % i === 0
  );
  return listOfFactors.filter((i) => i > limit);
}

//</1>
