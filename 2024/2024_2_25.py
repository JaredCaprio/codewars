""" 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
"""


def well(x): 
    #create var to count good ideas   
    count = 0
    #loop over the input array
    #increment the count everytime there is a good idea
    for i in x:
        if i == "good":
            count += 1    
    #return the apporpiate string  
    if count >= 3:
        return "I smell a series!"
    elif count >= 1:
        return "Publish!"
    else:
        return "Fail!" 
   


print(well(['bad', 'bad', 'bad']))
print(well(['good', 'bad', 'bad', 'bad', 'bad']))
print(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))