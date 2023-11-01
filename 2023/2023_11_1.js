/*<1> https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
Task

Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt
Notes

    Year Of Course always Positive .
    Have no fear , It is guaranteed that the answer exists .
    It's not necessary that the year passed to the function is Happy one .
    Input Year with in range (1000  ≤  y  ≤  9000)

Input >> Output Examples:

nextHappyYear (7712) ==> return (7801)

Explanation:

As the Next closest year with only distinct digits is 7801 .

nextHappyYear (8989) ==> return (9012)

Explanation:

As the Next closest year with only distinct digits is 9012 .

nextHappyYear (1001) ==> return (1023)

Explanation:

As the Next closest year with only distinct digits is 1023 .
*/

function nextHappyYear(year) {
  let isUnique = false;
  let index = year;
  let resYear = -1;

  while (!isUnique) {
    index++;
    let set = +Array.from(new Set(index.toString().split(""))).join("");
    if (set.toString().length === 4) {
      isUnique = true;
      resYear = index;
    }
  }
  return resYear;
}

//</1>
