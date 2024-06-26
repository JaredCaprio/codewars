""" https://www.codewars.com/kata/5390bac347d09b7da40006f6/python Jaden Casing Strings
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
"""

import string


def to_jaden_case(str):
    return string.capwords(str)


# Test cases
print(to_jaden_case("life is like when the rain don't never stops"))
print(to_jaden_case("I am just an icon living"))
print(to_jaden_case("all your verses sound like dirty dishes"))
print(to_jaden_case("how are mirrors real if your eyes aren't"))
