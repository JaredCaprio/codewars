""" https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/python Is it a letter?
Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not. 

"""

# create function that takes in a character as a string.  The function will only ever be passed a string
# input string will only ever be one character in length
# function must return a boolean based on whether or not the character is a letter

import re


def is_it_letter(s):

    x = re.search("[a-zA-Z]", s)

    if x:
        return True
    else:
        return False


# Test cases
print(is_it_letter("8"), False)
print(is_it_letter("$"), False)
print(is_it_letter("A"), True)
print(is_it_letter("H"), True)
