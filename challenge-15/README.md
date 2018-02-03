# Whiteboard Challenge 15

*Write a function that accepts the root of a tree as it's argument, and returns an array of nodes, if any, which have no children.*

---

## Installing and Getting Started

Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To see outcome of solution, type `node index.js` in the command line, this will show a console log of the given list solution.

```
[ TreeNode { val: 4, children: [] },
  TreeNode { val: 5, children: [] },
  TreeNode { val: 6, children: [] },
  TreeNode { val: 7, children: [] } ]
  ```

---

## Data Structures

### Solution Module
This contains a function with anarity of one, it takes in the root of a tree, traverses through the tree using the `breadthFirst` method, finds tree nodes with no children, pushes the node to an array and returns the array.

---

## Tests

* Checks that valid input returns an array
* Checks invalid arguments return null
* Checks the returned array contains tree nodes