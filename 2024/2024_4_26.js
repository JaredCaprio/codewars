/* <1>https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]



*/

//create a function that takes in two parameters (m:int, n:float)
// m is the multiples of n, returned in an array

/* function multiples(m, n) {
  //create an output array
  const output = [];
  //loop from 1 to m, pushing n * i to output array on each iteration
  for (let i = 1; i <= m; i++) {
    output.push(n * i);
  }
  //return output array
  return output;
} */
const multiples = (m, n, output = []) => {
  for (let i = 1; i <= m; i++) {
    output.push(n * i);
  }
  return output;
};

//test cases
console.log(multiples(3, 5));
//</1>
