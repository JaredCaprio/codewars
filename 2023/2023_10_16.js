/* <1> https://www.codewars.com/kata/5a1ebe0d46d843454100004c/javascript
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1

The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

  The year can be evenly divided by 4;
  If the year can be evenly divided by 100, it is NOT a leap year, unless;
  The year is also evenly divisible by 400. Then it is a leap year.
*/
function toDayOfYear(arr) {
  let oneDay = 1000 * 60 * 60 * 24;

  let startDate = new Date(arr[2], 0, 1);
  let endDate = new Date(arr[2], arr[1] - 1, arr[0]);
  console.log(endDate);

  let isLeap = new Date(arr[arr.length - 1], 1, 29).getMonth() === 1;

  let addLeapDay = true;

  if (arr[1] >= 2 && arr[0] >= 29 && isLeap) addLeapDay = true;

  return Math.round(Math.abs((startDate - endDate) / oneDay)) + addLeapDay;
}
//</1>
