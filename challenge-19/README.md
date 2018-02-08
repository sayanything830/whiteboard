# Whiteboard Challenge 19

*Flatten a k-ary tree and return a sorted singly linked list.*

---

## Installing and Getting Started

Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To see outcome of solution, type `node index.js` in the command line, this will show a console log of the given list solution.

```
SLL {
  head: Node { value: 1, next: Node { value: 2, next: [Node] } } }
```

---

## Data Structures

### Solution Module
This contains a function with anarity of one, it takes in a tree, declares an empty array, traverses through the tree using the `breadthFirst` method, and pushes the value of each node to the array. Once the tree has been traversed, the array is sorted and iterated through to insert each element to the end of a singly linked list.
---

## Tests

* Checks that valid input returns a singly linked list
* Checks that the linked list is sorted
* Checks lack of argument passed returns null
* Checks invalid type of argument returns null