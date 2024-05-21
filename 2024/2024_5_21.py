"""  https://www.codewars.com/kata/6089c7992df556001253ba7d/python | What a "Classy" Song
Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

mount_moose = Song('Mount Moose', 'The Snazzy Moose')

mount_moose.title => 'Mount Moose'
mount_moose.artist => 'The Snazzy Moose'

You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".
Example

mount_moose = Song('Mount Moose', 'The Snazzy Moose')

# day 1 (or test 1)
mount_moose.how_many(['John', 'Fred', 'BOb', 'carl', 'RyAn']) => 5
# These are all new since they are the first listeners.

# day 2
mount_moose.how_many(['JoHn', 'Luke', 'AmAndA']); => 2
# Luke and Amanda are new, john already listened to it the previous day

Also if the same person listened to it more than once a day it should only count them once.
Example

mount_moose = Song('Mount Moose', 'The Snazzy Moose')

# day 1
mount_moose.how_many(['John', 'joHN', 'carl']) => 2

Good luck!
"""

# create a class called Song

# and create a method called howMany
# this method will take in list of names and return an integer values
# indicating how many times the song has been listened to by a unique listener
# names casing should be ignored


class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artists = artist
        self.listeners = []

    def howMany(self, names):
        # loop over names parameter, checking if each name is already in listeners list
        # convert all names to lowercase before comparison
        # store count of new listeners in variable
        count = 0

        for name in names:
            lowerCaseName = name.lower()
            # increase the count if a listener isn't in the listeners list
            if lowerCaseName not in self.listeners:
                count += 1
                self.listeners.append(lowerCaseName)

        # return number of new listeners each invocation
        return count
