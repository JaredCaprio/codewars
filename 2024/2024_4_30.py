""" De-Emojify | https://www.codewars.com/kata/6627696c86b953001280675e/train/python
Inspired by the emojify custom Python module.

You are given a string made up of chains of emotes separated by 
1 space each, with chains having 2 spaces in-between each.

Each emote represents a digit:

:)  | 0
:D  | 1
>(  | 2
>:C | 3
:/  | 4
:|  | 5
:O  | 6
;)  | 7
^.^ | 8
:(  | 9

Each emote chain represents the digits of the ASCII/Unicode code for a 
character, e.g. :( ;) is 97, which is the ASCII code for 'a'.

Given a such string of emotes, find the string it represents. Example:

':D :) :/  :D :) :|' is 2 chains: ':D :) :/' and ':D :) :|'.

These represent ASCII codes 104 and 105 respectively, translating to 'hi'.

Input will always be valid. Chains may start with leading zeroes; these are 
valid and do not change the chain's value.
"""

## takes in chains of emojis.
## chains are separated by double spaces while each emoji is separated by single spaces
## using the emoji mapping provided convert the input string of emojis into numbers and
## then convert those numbers to their corresponding ASCII code characters

## Create a function that takes in a string and only a string.
## The function will never be passed an map, a tuple, a list, a hashmap, etc.


def deemojify(string):

    # create dict to store emoji mapping
    emotes = {
        ":)": 0,
        ":D": 1,
        ">(": 2,
        ">:C": 3,
        ":/": 4,
        ":|": 5,
        ":O": 6,
        ";)": 7,
        "^.^": 8,
        ":(": 9,
        "": " ",
    }
    # create variable to store converted string
    codes = ""

    # loop over input string and convert emoji to number mapping
    splitString = string.split(" ")
    for i in splitString:
        codes += str(emotes[i])

    # take covert string and convert to ASCII characters
    splitCodes = codes.split(" ")
    finalOutput = ""
    for code in splitCodes:
        finalOutput += chr(int(code))
    # return final string of ASCII characters
    return finalOutput


print(
    deemojify(
        ";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"
    )
)
