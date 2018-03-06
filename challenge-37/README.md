# Whiteboard Challenge 37

*Write a function takes a Binary Tree as it's argument and returns a sorted linked list.*

---

## Data Structure

`Solution` is a function with an arity of one. It takes in a binary tree, validates the argument, then traverses the tree with the `inOrderTraversal` method. The traversal returns an array which is then sorted and iterated through to create a singly linked list. Big O notation: O(n).

Example:
```
    - 2
  6
    - 3

returns:

SLL {
  head: Node { value: 2, next: Node { value: 3, next: Node { value: 6, next: null} } },
  length: 3 }
```

---

## Tests

Check for:
* Argument must be a binary tree
* Allows for floating point integers
* Tree must have a root
* leaf nodes values must be a number
