"""https://www.codewars.com/kata/514b92a657cdc65150000006/train/python  Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
"""

# function takes in a number as an int (n).  No strings, No lists, no tuples, no maps, no dictionaries
# function returns the sum of all numbers from 0 to n that are multiples of 3 or 5


def solution(number):
    # if number is negative, return 0
    if number == 0:
        return 0
    # create a loop that counts from 0 to number
    # checking if i is divisible by 3 or 5 and then adding to sum
    sum = 0
    i = 0
    while i < number:
        if i % 3 == 0 or i % 5 == 0:
            sum += i
        i += 1

    # return sum
    return sum


## test cases
print(solution(15))  # => 45
print(solution(10))  # => 23
