/* <1> https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
//NOTES
//create a function that takes in a string.  always a string,  no numbers, no whitespace, no special character
//no empty strings, lower and upper case.
//convert each character of the string to its ASCII code and call it total1;
//then take total1 and replace every occurrence of the number 7 with a 1 and call that total2
//then finally sum up each total1 and total2's numbers digits and find the difference between the two.
//return the difference

function calc(x) {
  //loop over the input string and convert each letter to ASCII code
  //add each code up and store in external variable called total1
  let total1Arr = [];

  for (let i = 0; i < x.length; i++) {
    total1Arr.push(x.charCodeAt(i));
  }

  let total1 = total1Arr.join("");

  //use regex to replace each 7 with a one and store that in variable total2
  let total2 = total1.replace(/7/g, 1);

  //convert total1 and total2 to array of number and then reduce to find sum
  //find difference between both sums

  //create a helper function that converts and reduces a integer
  function reduceTotals(number) {
    return Array.from(String(number), Number).reduce((a, b) => a + b, 0);
  }

  //return the difference
  return reduceTotals(total1) - reduceTotals(total2);
}

//test cases
console.log(calc("abcdef"), 6);
console.log(calc("ifkhchlhfd"), 6);
console.log(calc("aaaaaddddr"), 30);

//</1>
