""" https://www.codewars.com/kata/5264d2b162488dc400000001/train/python Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
"""

# create a function that takes in a sentence as a string
# input string will only consist of letters and space (only if there is more than one word)
# function should reverse any word in the string that have more than 5 letters.


def spin_words(sentence, outputLst=[]):
    split = sentence.split()
    for word in split:
        if len(word) >= 5:
            outputLst.append(word[::-1])
        else:
            outputLst.append(word)

    return " ".join(outputLst)


## test cases ##
print(spin_words("this is a surrounded with ball tests"))
