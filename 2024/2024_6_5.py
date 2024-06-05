""" https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
"""


def xo(s):
    x = 0
    o = 0
    for char in range(len(s)):
        if s[char] == "x" or s[char] == "X":
            x += 1
        elif s[char] == "o" or s[char] == "O":
            o += 1
    return x == o


# test cases
print(xo("xoxoxoxox"))
print(xo("veifjiejfxoxxooooxxojeixo"))
