/* <1> https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/javascript
Task

Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

Example:

shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
*/
function shuffleIt(arr, ...rest) {
  for (const [i, j] of rest) {
    if (i >= 0 && i < arr.length && j >= 0 && j < arr.length) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
//</1>
