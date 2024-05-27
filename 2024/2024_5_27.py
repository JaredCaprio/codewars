""" https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/python https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/python
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
"""


def abbrev_name(name):
    splitName = name.split(" ")
    return f"{splitName[0][0].upper()}.{splitName[1][0].upper()}"


# Test Cases
print(abbrev_name("John Smith"))
print(abbrev_name("tod rund"))
