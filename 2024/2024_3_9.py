""" https://www.codewars.com/kata/53369039d7ab3ac506000467/train/python  Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
"""


def bool_to_word(boolean):
    if boolean:
        return "Yes"
    else:
        return "No"


# Test Cases
print(bool_to_word(True))
print(bool_to_word(False))
