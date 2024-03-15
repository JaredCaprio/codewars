""" https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/python Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
"""

# Function will take in a string, never any other data type.  String will only contain letters
# function must return the shortest word in the string.


def find_short(s):

    splitString = s.split(" ")

    def sortFunc(e):
        return len(e)

    splitString.sort(key=sortFunc)
    return len(splitString[0])


# Test cases
print(
    find_short("this is a test sentence for the find short function written in python")
)
