# Whiteboard Challenge 17

*Write a function that accepts a Tree and returns the total sum of all the elements in the tree. - You are to assume that each node will have a val property which has a numeric value. - Any other data points, aside from children are irrelevant.*

---

## Installing and Getting Started

Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To see outcome of solution, type `node index.js` in the command line, this will show a console log of the given list solution.

```
Sum of all values in tree:  21
  ```

---

## Data Structures

### Solution Module
This contains a function with anarity of one, it takes in a tree, traverses through the tree using the `breadthFirst` method, and adds the value of each node.

---

## Tests

* Checks that valid input returns a number
* Checks lack of argument passed returns null
* Checks invalid type of argument returns null