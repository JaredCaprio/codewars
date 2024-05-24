"""https://www.codewars.com/kata/55685cd7ad70877c23000102/python Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Fundamentals
"""

# create function that takes in a number, only ever a number
# function must return the negative version of that number unless the number is already negative
# in which case just return the number unchanged


def make_negative(number):
    if number <= 0:
        return number
    else:
        return -abs(number)


# test cases
print(make_negative(34))
print(make_negative(-1))
