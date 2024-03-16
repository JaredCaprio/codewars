"""  https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
"""

# create function that takes in a string and an int
# the function should return the input string repeated n times


def repeat_str(repeat, string):
    # create var to hold concatenated string
    finalString = ""
    # create loop that runs n number of times
    i = 0
    while i < repeat:
        finalString += string
        i += 1
    # return concat string var
    return finalString


# Test Cases
print(repeat_str(2, "anal"))
