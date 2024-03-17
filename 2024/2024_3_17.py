""" https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python | Complementary DNA
def DNA_strand(dna):
    # output string
    output = ""

    # loop with if statements to add to output string
    for i in dna:
        if i == "T":
            output += "A"
        elif i == "A":
            output += "T"
        elif i == "C":
            output += "G"
        elif i == "G":
            output += "C"
    return output

"""

# function will take in a string of dna symbols
# "A" and "T" are complements, "C" and "G" are complements
# function must return complementary string


def DNA_strand(dna):
    # output string
    output = ""

    # loop with if statements to add to output string
    for i in dna:
        if i == "T":
            output += "A"
        elif i == "A":
            output += "T"
        elif i == "C":
            output += "G"
        elif i == "G":
            output += "C"
    return output


# Test cases
print(DNA_strand("ATTG"))
