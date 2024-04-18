""" https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/python Find min and max 
Implement a function that returns the minimal and the maximal value of a list (in this order).
"""

# function takes in a list of ints
# returns tuple of the min and max values of the given list

import math


def get_min_max(seq):
    minVal = min(seq)
    maxVal = max(seq)
    return (minVal, maxVal)


## Test Cases
print(get_min_max([2, 5]), "Expected: (2, 5)")
print(get_min_max([6, 7]), "Expected: (6, 7)")
print(get_min_max([5, 1]), "Expected: (1, 5)")
print(get_min_max([21, 52]), "Expected: (21, 52)")
