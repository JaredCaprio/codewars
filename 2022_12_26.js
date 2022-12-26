/*<1>


*/
function divisors(integer) {
  let result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }
  console.log(result);
  return result.length < 1 ? `${integer} is prime` : result;
}

console.log(divisors(15));

//</1>
