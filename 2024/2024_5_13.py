""" https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python  Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

high_and_low("1 2 3 4 5")  # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
"""

# function takes in a string of integers separated by spaces
# function must return the highest and lowest numbers in the string
# parameter (numbers) will always just a string of number never a string of letter.
# No booleans, no lists, no tuples will be passed in.
# return will be a string of the highest and lowest numbers as a string separated by a space.


def high_and_low(numbers):
    # split the numbers string into a list
    splitNums = numbers.split(" ")

    # convert each item of list to int to be compared
    numList = list(map(int, splitNums))
    outputLst = [str(max(numList)), str(min(numList))]

    return " ".join(outputLst)


# Test Cases
print(high_and_low("2 4 5 6 7 8 9"))
print(high_and_low("89 23 52 852 1263"))
