""" https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python Mumbling
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
"""


def accum(st):
    # create output string variable
    output = ""

    # loop over st, multiply each character by its index + 1
    # add to output string
    i = 0
    while i < len(st):
        temp = st[i] * (i + 1)
        if i < len(st) - 1:
            temp += "-"
        output += temp.title()

        i += 1
    # return output string
    return output


# test cases
print(accum("fhg"))
print(accum("abcdegfhijklmnop"))
