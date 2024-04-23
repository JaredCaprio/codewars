""" 
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

"""
# function will take in an integer (m)
# function must return n * 5 to the number of digit in n

def multiply(n):
    digits = len(str(abs(n)))   
    return n * 5 ** digits

# Test cases 
print(multiply(4)) # => 20
print(multiply(-110)) # => -13750
print(multiply(5)) # => 25

