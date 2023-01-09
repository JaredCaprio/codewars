/*<1> https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language)
 that determines if a given non-negative integer is a power of two. 
 From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e.
 the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.
Examples

isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false

Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is 
not a power of 2.
*/
function isPowerOfTwo(n) {
  return Math.log2(n) % 1 === 0;
}
//</1>

/*<2> https://www.codewars.com/kata/56b0bc0826814364a800005a/train/javascript
A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle.
 That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10), then return True if that number
 wil be a cyclops number when converted to binary, or False if it won't.
Assume n will be a positive integer.

A test cases with the process shown:

cyclops (5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False

n will always be > 0.
*/
const cyclops = (n) => {
  let binaryNum = n.toString(2).split("0");
  return binaryNum.length == 2 && binaryNum[0] == binaryNum[1];
};
//</2>