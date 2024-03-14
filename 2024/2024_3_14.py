"""  https://www.codewars.com/kata/515e271a311df0350d00000f/train/python Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

"""

# thank you for the question
# create a function that takes in a list of numbers
# the function must square and sum each number in the list and return the sum


def square_sum(numbers):
    # create sum var
    sum = 0
    # loop over list squaring each num and adding to sum
    for num in numbers:
        sum += num**2

    # return sum var
    return sum


# Test Cases
print(square_sum([1, 2, 2]))  # 9
print(square_sum([5, 4, 2]))  # 45
print(square_sum([9, 1, 2]))  # 86
