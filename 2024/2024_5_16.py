""" https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/python Color Ghost 
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = Ghost()
ghost.color  #=> "white" or "yellow" or "purple" or "red"

"""

import random


class Ghost(object):
    def __init__(self):
        colors = ["yellow", "white", "yellow", "purple", "red"]
        randNum = random.randint(0, len(colors) - 1)
        self.color = colors[randNum]
