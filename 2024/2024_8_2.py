"""  https://www.codewars.com/kata/555086d53eac039a2a000083/train/python Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
"""

# function takes in two params, flower1, flower2
# returns true if the number of pedals of flower1 is odd and flower2 is even


def lovefunc(flower1, flower2):
    isFlower1Even = flower1 % 2 == 0
    isFlower2Even = flower2 % 2 == 0
    return isFlower1Even != isFlower2Even


# Test Cases
print(lovefunc(3, 5), "Expected return: False")  # False
print(lovefunc(4, 7), "Expected return: True")  # True
