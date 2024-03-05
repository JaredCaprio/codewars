""" https://www.codewars.com/kata/594093784aafb857f0000122/python Difference between two collections
Find the difference between two collections. The difference means that either the character is present
 in one collection or it is present in other, but not in both. Return a sorted list with the difference.
The collections can contain any character and can contain duplicates.
Example

A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]
"""


def diff(a, b):
    diff1 = list(set(b).difference(a))
    diff2 = list(set(a).difference(b))
    output = diff1 + diff2
    output.sort()
    return output


# test cases
print(diff(["r", "p", "t", "h"], ["z", "h", "t", "e"]))
