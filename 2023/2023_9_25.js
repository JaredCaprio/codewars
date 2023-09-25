/* <1> https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript

Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/
function reverseBits(number) {
  if (number === Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }

  const bigIntNumber = BigInt(number);
  const binaryString = bigIntNumber.toString(2);
  const reversedBinaryString = binaryString.split("").reverse().join("");

  const reversedNumber = BigInt(`0b${reversedBinaryString}`);

  if (reversedNumber <= BigInt(Number.MAX_SAFE_INTEGER)) {
    return Number(reversedNumber);
  } else {
    return Number.MAX_SAFE_INTEGER;
  }
}

//</1>
