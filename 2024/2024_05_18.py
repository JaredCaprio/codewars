""" https://www.codewars.com/kata/5a3dd29055519e23ec000074/solutions/python Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"].
 The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, 
giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, 
represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

"""

# function will compare two arrays and return score based on scoring guide.


def check_exam(arr1, arr2):
    # create a score variable
    score = 0

    # loop over both arrays at the same time
    # comparing each item in one array to the corresponding item in the other array
    # calculating the score each iteration
    i = 0
    while i < len(arr1):
        if len(arr2[i]) == 0:
            pass
        elif arr1[i] != arr2[i]:
            score -= 1
        elif arr1[i] == arr2[i]:
            score += 4
        i += 1

    if score <= 0:
        return 0
    return score


# test case
print(check_exam(["b", "a", "a", "a"], ["b", "", "c", "a"]))
