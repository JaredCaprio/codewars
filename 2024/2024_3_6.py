""" https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/python  Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
"""

# function takes in a num (int).  No strings, no lists, no maps, no tuples, no funny biz.
# function returns the input num with its digit rearranged in descending order


def descending_order(num):
    # split num into a list of its digits
    splitNum = [str(i) for i in str(num)]

    # sort the list, join the list back together, and return it
    splitNum.sort(reverse=True)

    return int("".join(splitNum))


# Test Cases
print(descending_order(12345))
print(descending_order(349820999))
