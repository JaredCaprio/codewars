""" https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/python
Task

Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes

    "flick" will always be given in lowercase.
    A list may contain multiple flicks.
    Switch the boolean value on the same element as the flick itself.


"""


# function takes in a list of string items, no ints, no big ints, no booleans, no tuples, no maps, 
# no hashmap, no sets 

# function will return a list the same length as the input list of boolean values
# it will return true for every item until it encounters an item that contains the string "flick"
# it will then begin returning the opposite boolean value.
# every time the string "flick" is encountered, the function should switch to outputting the opposite boolean value

def flick_switch(lst):
    curBool = True
    output = []
    i = 0
    while i < len(lst):
        if  lst[i] == "flick":            
            curBool = not curBool
        output.append(curBool)
        i += 1       
    return output

# test cases
print(flick_switch(['chicken', 'potpie', 'flick', 'turkey', 'fire chicken', 'dragon shrimp', 'big', 'family', 'good']))
