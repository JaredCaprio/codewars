"""  https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
"""


def likes(names):
    if len(names) == 0:
        return "no one likes this"
    if len(names) == 1:
        return "%s likes this" % (names[0])
    if len(names) == 2:
        return "%s and %s like this" % (names[0], names[1])
    if len(names) == 3:
        return "%s, %s and %s like this" % (names[0], names[1], names[2])
    if len(names) > 3:
        return "%s, %s and %s others like this" % (names[0], names[1], len(names) - 2)
