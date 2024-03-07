"""https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
"""


def filter_list(l):
    def cb(x):
        if type(x) != int:
            return False
        else:
            return True

    onlyInts = filter(cb, l)

    return list(onlyInts)


# test cases
print(filter_list(["b", 9, 2, "c", 13, 32]))
print(filter_list(["b", "c", "e", "q"]))
print(filter_list([0, 2, 5, 23, 52, 15, 16]))
