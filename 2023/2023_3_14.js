/* <1>https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9 \n 4 5 6 \n 1 2 3 \n 0 \n

Cell phone keypad's layout:
1 2 3\n 4 5 6\n 7 8 9\n 0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to 
a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/
function computerToPhone(numbers) {
  console.log(numbers);
  let output = "";
  for (let i = 0; i < numbers.length; i++) {
    console.log(output);
    switch (numbers[i]) {
      case "1":
        output += "7";
        break;
      case "2":
        output += "8";
        break;
      case "3":
        output += "9";
        break;
      case "7":
        output += "1";
        break;
      case "8":
        output += "2";
        break;
      case "9":
        output += "3";
        break;
      case "0":
        output += "0";
        break;
      case "4":
        output += "4";
        break;
      case "5":
        output += "5";
        break;
      case "6":
        output += "6";
        break;
    }
  }
  return output;
}
//</1>
