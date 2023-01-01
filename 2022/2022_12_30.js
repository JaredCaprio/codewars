/*<1> https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]

*/
var flatten = function (array) {
  let flatArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(item);
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
};
//</1>
