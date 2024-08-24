""" https://www.codewars.com/kata/55a144eff5124e546400005a/train/python Classy Classes
Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://docs.python.org/3/tutorial/classes.html

"""


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.info = "#{name}s age is #{age}"

    def getInfo(self):
        return f"{self.name}'s age is {self.age}"


John = Person("John", "39")
Jared = Person("Jared", "29")

print(John.getInfo())
