# Whiteboard Challenge 14

*Write a function called dedupe(head) that accepts the head of a linked list as it's argument, and returns a new linked list - Use a stack to identify any consecutive duplication, and remove them from the list.*

---

## Installing and Getting Started
Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To see outcome of solution, type `node index.js` in the command line, this will show a console log of the given list solution.

```Original linked list:  SLL {
  head: { value: 2, next: { value: 2, next: [Object] } },
  listLength: 4 }

New linked list SLL {
  head: { value: 2, next: { value: 3, next: [Object] } },
  listLength: 3 }
  ```

---

## Data Structures

### Solution Module
This contains a function with an arity of one, it taked in a singly linked list as an argument, removes consecutive duplicate node values and returns a new list.

---

## Tests
* Checks valid arguments return expected results
* Checks if list is only one node in length
* Checks if list is empty
* Checks for invalid arguments