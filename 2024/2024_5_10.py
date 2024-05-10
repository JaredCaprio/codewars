"""  

"""

""" 
Each time a ship is spotted, a new instance of ship is created
passing in the draft (how low the ship sits in the water)
and the crew (number of pirates on board the ship)

a method in the Ship class should be created to determine whether the ship
is worth looting
each crew member add 1.5 to the draft value
so the is_worth_it function subtract the weight added by the crew from the draft
if the weight of the ship is more than 20 after subtracting the weight of the crew
then the ship is worth looting

"""


class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def is_worth_it(self):
        return self.draft - (self.crew * 1.5) > 20

    # Your code here
