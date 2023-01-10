/*<1> https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, 
now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget;
the second one is an array containing the price of each gift. You should return an integer 
representing the maximum amount of gifts Leo can buy.
Example:

Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/
function howManyGifts(maxBudget, gifts) {
  let result = 0;
  let counter = 0;
  let sortedArr = gifts.sort((a, b) => a - b);
  console.log(sortedArr);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] > maxBudget) {
      break;
    }
    result += sortedArr[i];
    counter++;
    if (result + sortedArr[i + 1] > maxBudget) {
      break;
    }
  }
  return counter;
}
//</1>
