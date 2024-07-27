"""https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python Convert number to reversed array of digits
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0] 
"""


def digitize(n):
    numList = [int(i) for i in str(n)]
    numList.reverse()
    return numList


# test cases
print(digitize(2342))
