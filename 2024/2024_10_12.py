""" https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/python  Simple Substitution Cipher Helper
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, 
where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.
 """


class Cipher(object):
    def __init__(self, map1, map2):
        self.map1 = map1
        self.map2 = map2

    def encode(self, s):
        encodedMessage = ""
        for letter in s:
            letLoc = self.map1.find(letter)
            encodedMessage += self.map2[letLoc] if letLoc != -1 else letter
        return encodedMessage

    def decode(self, s):
        decodedMessage = ""
        for letter in s:
            letLoc = self.map2.find(letter)
            decodedMessage += self.map1[letLoc] if letLoc != -1 else letter
        return decodedMessage
