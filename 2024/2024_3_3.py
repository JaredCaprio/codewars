""" Disemvowel Trolls  https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


"""

## Create a function that takes in a string of letters and some special characters
## returns the input string with all the vowels removed
## y is not considered a vowel for this kata


def disemvowel(string_):
    # Create a string var to hold all non vowel characters
    noVowels = ""
    # loop over input string_
    for i in string_:
        if i not in "aeiouAEIOU":
            # concat non-vowel characters to output string
            noVowels += i

    # return output string
    return noVowels


## Test Cases
print(disemvowel("There is a troll among us"))
print(disemvowel("x company is the better than y company"))
