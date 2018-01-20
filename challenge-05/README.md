## Whiteboard Challenge 04

*Write a function that returns the middle node in a singly linked list*

```
Given [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]

Return [15, nxt]
```

This is a function that takes in an object representing a single linked list as an argument. It has two iterators, one that moves one node at a time through the linked list and one that moves two nodes at a time. Once the iterator that moves two nodes at a time reaches null (the last node), the function will return the value of where the first iterator is pointing (the middle node).

Tests:
* Check that an argument is passed into function
* Check that argument passed is an object
* Check that each node of objects has two keys
* Check that a valid argument returns the expected node.
