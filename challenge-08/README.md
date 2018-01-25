# Whiteboard Challenge 08

*Write a function that accepts the head of two linked list as it's two arguments, and return the intersection of those two linked lists*

## Data Structures

### Solution Module
This function has an arity of two, it accepts two singly linked lists and returns a new list with matching values between original two lists. The function turns the first linked list into an object where the values are entered as keys and set to a `true` value. It then iterates through the second list and checks to see if the value of each node exists in the object created from the first list. If the value exists, it then sends the value to a node contructor and adds to a new list.