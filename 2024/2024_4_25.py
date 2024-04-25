"""  https://www.codewars.com/kata/59342039eb450e39970000a6/train/python
Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!

"""

# function takes in a number (n)
# function must return a list containing all positive odd numbers below n

def odd_count(n): 
    return (n + 1) // 2 if n % 2 == 0 else (n + 2) // 2  

 

# test cases 
print(odd_count(495849))
print(odd_count(4))

