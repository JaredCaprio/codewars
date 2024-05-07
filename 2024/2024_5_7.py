""" https://www.codewars.com/kata/56747fd5cb988479af000028/train/python  Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
"""

# This function will take in a string or letters.  It will only take in letters,
# never numbers, special characters, booleans, lists, tuples, maps
# This function will return the middle character in the string
# if the string has an odd length then the middle one character will be returned
# if the string has an even length then the middle two characters will be returned


def get_middle(s):
    output = ""
    if len(s) % 2 != 0:
        output = s[len(s) // 2]
    elif len(s) % 2 == 0:
        output = f"{s[len(s) // 2 - 1]}{s[len(s) // 2]}"
    return output


# test cases
print(get_middle("frenching"))
