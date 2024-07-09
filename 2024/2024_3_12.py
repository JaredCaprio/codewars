""" https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python Ones and Zeros
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
"""

# function will take in an arr of 1's and 0's
# functions must return the binary number represented in the arr in decimal form


def binary_array_to_number(arr):
    binNum = "".join(map(str, arr))
    return int(binNum, 2)


# test cases
print(binary_array_to_number([1, 0, 0, 0]))
print(binary_array_to_number([1, 1, 1, 1]))
