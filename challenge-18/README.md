# Whiteboard Challenge 18

*Write a function which will return the max child count of a node within a k-ary tree*

---

## Installing and Getting Started

Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To see outcome of solution, type `node index.js` in the command line, this will show a console log of the given list solution.

```
TreeNode {
  val: 2,
  children:
   [ TreeNode { val: 4, children: [] },
     TreeNode { val: 5, children: [] },
     TreeNode { val: 6, children: [] },
     TreeNode { val: 7, children: [] } ] }
```

---

## Data Structures

### Solution Module
This contains a function with anarity of one, it takes in a tree, declares a variable to represent the node with the most children, traverses through the tree using the `breadthFirst` method, and reassigns the `mostChildren` variable if the current node is greater than `mostChildren`'s children.

---

## Tests

* Checks that valid input returns a node
* Checks that the node returns has the most number of children
* Checks the node returned is the first node with most children if more than one node have the same amount of most children
* Checks lack of argument passed returns null
* Checks invalid type of argument returns null