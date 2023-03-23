/* <1> https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
function divCon(x) {
  let strings = [];
  let ints = [];

  x.forEach((item) => {
    if (typeof item === "number") {
      ints.push(item);
    } else {
      strings.push(item);
    }
  });
  let strTot = strings.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  let intTot = ints.reduce((a, b) => a + b, 0);
  return intTot - strTot;
}
//</1>
