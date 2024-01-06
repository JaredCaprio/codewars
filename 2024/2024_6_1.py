""" https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/python Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

"""

# create function that takes in a string
# function must return input string with all the character in reverse order


def solution(string):
    return string[::-1]


# test cases
print(solution("race car"))
print(solution("Death"))
