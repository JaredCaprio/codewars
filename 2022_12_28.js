/*<1> https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use
 the new String Template feature, Help Timmy with his string template so it works 
 as he expects!

*/
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

//</1>

/*<2> https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
Write a simple function that takes a Date as a parameter and returns a Boolean
 representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking
the day
*/
function isToday(date) {
  let today = new Date();
  let currDate = today.getDate();
  let currYear = today.getFullYear();
  let givenDate = date.getDate();
  let givenYear = date.getFullYear();
  return currDate === givenDate && currYear === givenYear ? true : false;
}
//</2>
