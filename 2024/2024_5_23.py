""" 

 """

# find digital root of n
# function will take in a number, never a string, boolean, map, tuple, dictionary, etc.
# function will return the digital root of the sum of digits of n


def digital_root(n):
    if len(str(n)) == 1:

        return n
    splitNum = [int(i) for i in str(n)]
    sum = 0
    for num in splitNum:
        sum += num

    return digital_root(sum)


# test cases
print(digital_root(9768330446748507762))
print(digital_root(12))
print(digital_root(9854))
