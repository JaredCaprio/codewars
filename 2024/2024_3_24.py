"""  https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
"""


def longest(a1, a2):
    list = []
    for c in a1:
        list.append(c)
    for c in a2:
        list.append(c)
    aSet = set(list)
    sortedList = sorted(aSet)
    return "".join(sortedList)


print(longest("ajfieojioaw", "fjieojaiojvb"))
