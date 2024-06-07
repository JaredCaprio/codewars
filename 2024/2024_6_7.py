"""   https://www.codewars.com/kata/56dec885c54a926dcd001095/train/python  Opposite number
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34


"""


def opposite(number):
    return -number


# Test Cases
print(opposite(34))
print(opposite(-1))
print(opposite(0))
print(opposite(2.4242))
