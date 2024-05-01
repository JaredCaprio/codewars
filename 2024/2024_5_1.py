""" https://www.codewars.com/kata/546e2562b03326a88e000020/train/python Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
"""

## function takes in a num (int)
## function should take each digit of the input num,
## square it and then return it concatenated together


def square_digits(num):
    # create var to hold arr of digits
    # split up each digit of the input num
    # loop over the digits, squaring each one
    splitNum = [int(i) ** 2 for i in str(num)]

    # return result
    return int("".join(map(str, splitNum)))


## test cases
print(square_digits(54))
print(square_digits(1))
print(square_digits(65))
