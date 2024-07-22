"""  https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python Find the next perfect square!
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
"""

import math


def find_next_square(sq):

    dec = math.modf(math.sqrt(sq))
    if dec[0] > 0:
        return -1

    sqrt = math.sqrt(sq)
    return int((sqrt + 1) ** 2)


print(find_next_square(144))
