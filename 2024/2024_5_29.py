""" https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
"""

# function will take in an list.  It will only ever take in an list and the list will
# contain only numbers, no strings, booleans, tuples, or lists.
# function must return the sum of only the positive numbers in the input list


def positive_sum(arr):
    # create sum variable
    sum = 0
    # loop over arr and check if num > 0
    # add to sum var if num > 0
    i = 0
    while i < len(arr):
        if arr[i] > 0:
            sum += arr[i]
        i += 1

    # return sum var
    return sum


# Test Cases
print(positive_sum([5, 2, -5, 2, -1]))
