# Whiteboard Challenge 36

*Write a function which takes two binary search trees as arguments, and compares them for structural likeness.*
  * *If they are structurally identical, return true*
  * *Else return false*

---

## Data Structure

`solution` is a function with an arity of two. It takes in two tree roots and validates the arguments. It then checks if both nodes are equal, if they are, it recursively repeats the check for the left and right branches. If they are not equal, (ie: one node exists while the other node is null), it returns false. Once the function has traversed both trees in entirety and each node has matched the other tree, it returns true.

Big O notation: O(n)


Example:

```
  - y   and     - b
x             a
  - z           - c

  returns true
```

```
  - y - a   and   - z
x               a
  - z             - b - c

  returns false
```
---

## Tests

Checks for:
  * Expected true outcome for matched trees
  * Expected false outcome for unmatched trees
  * Null if argument types are invalid
  * False if only one argument passed
