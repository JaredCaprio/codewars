""" https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0 Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters
of a string. You're given one parameter, 
the original string. You don't have to worry about strings with less than two characters.
"""


# function takes in a string of letters, only ever takes in letter as a string
# function must return the input string with the first and last letters removed
def remove_char(s):
    return s[1:-1]


# Test Cases
print(remove_char("fuckingidiot"))
print(remove_char("twohundredgecs"))
