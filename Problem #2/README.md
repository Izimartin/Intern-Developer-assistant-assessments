# Problem #2

You are the new owner of a wheat farm and you want to put in place an automated water distribution. 
You have multiple wheat fields and water towers dispatched to your farm. You want to know what’s the maximum distance between a field and a water tower for buying the right water pump: not too powerful because it's too expensive and also not too weak.
You can modelize fields and water towers by 2 lists of integers, each integer representing the position. You can assume the field and water towers are in the same “line”. The maximum distance between a field and a tower will be the pump power needed.

Write a function that returns the max power needed for the list of fields and water towers.

### Extra clarification:
    
    Each list are sorted
    List can’t be empty
    Positions are non-negative integer
    The max value of a position is 10^9

##### Examples below if the candidate needs more cases

### Example 1:

    Fields = [1, 2, 3]
    Towers = [2] => Max distance: 1

### Example 2:
    
    Fields = [1, 2, 3, 4]
    Towers = [1, 4] => Max distance: 1

### Example 3:

    Fields = [1, 5]
    Towers = [10] => Max distance: 9
