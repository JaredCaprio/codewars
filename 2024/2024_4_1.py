""" https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/python Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
"""

import re


def validate_pin(pin):
    return bool(re.fullmatch("\d{4}|\d{6}", pin))


# Test cases
print(validate_pin("1234"))  # True
print(validate_pin("34"))  # False
print(validate_pin("349853"))  # True
print(validate_pin("563a"))  # False
