""" https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions/python
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

"""

# Function takes in a non-negative int.  Not a string, or list or tuple, or hashmap, or set, or map.
# function must return a list containing all the powers of 2 raised to the exponent ranging from 0 to n
# example
# n = 3 => [2^0, 2^1, 2^2, 2^3] = [1, 2, 4, 8]


def powers_of_two(n):
    #initiate output list
    output = []
    #check if n = and return [1]
    if n == 0:
        return [1]
    # loop from 0 to n
    for x in range(n + 1):
        output.append(2**x)
    
    #return final list
    return output


# test cases
print(powers_of_two(0))
print(powers_of_two(3))
