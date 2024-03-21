""" https://www.codewars.com/kata/54edbc7200b811e956000556/python Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

"""

# take in a list of values (boolean, undefined, and null)
# return the number of times true appears in the list


def count_sheeps(sheep):
    # create count var
    count = 0
    # loop over array and if value is true
    # increase count by one
    for val in sheep:
        if val:
            count += 1
    return count


print(count_sheeps([True, False, False, True, True, False, False, True]))
