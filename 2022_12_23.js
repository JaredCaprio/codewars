/*<1>

*/
function generateShape(integer) {
  let result = "";

  for (let i = 0; i < integer; i++) {
    result += "+".repeat(integer);
    if (i < integer) result += "\n";
  }

  return result;
}

console.log(generateShape(8));
//</1>
