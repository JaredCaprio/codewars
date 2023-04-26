/*<1> https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.
Input

Input will always be a string, e.g., "Friday May 2, 7pm". 
Output

Output will be the shortened string, e.g., "Friday May 2".
*/
function shortenToDate(longDate) {
  const splitDate = longDate.split(" ");
  console.log(splitDate);
  const output = [];
  for (let i = 0; i < splitDate.length - 1; i++) {
    console.log(splitDate[i]);
    if (i === 2) {
      const commonRemoval = splitDate[i].slice(0, splitDate[i].length - 1);
      output.push(commonRemoval);
    } else {
      output.push(splitDate[i]);
    }
  }
  return output.join(" ");
}
//</1>
