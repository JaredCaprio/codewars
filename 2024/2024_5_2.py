""" https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/python Evens times last
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL),
  multiplied by the integer at the last index.
   0 1 2 3 4 5 6
  [3,5,3,6,3,7,2] => i % 2 == 0 => [3,3 2]

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
"""


def even_last(numbers):
    # loop over list of numbers - if the index of the list item is even, add to sum var
    # and multiply by int in last index
    sum = 0
    i = 0
    lenOfNumbers = len(numbers)
    while i < len(numbers):
        if i % 2 == 0:
            sum += numbers[i] * numbers[lenOfNumbers - 1]
        i += 1
    return sum


# test cases
print(even_last([2, 3, 4, 5]))
