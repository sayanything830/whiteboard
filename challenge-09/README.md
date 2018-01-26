# Whiteboard Challenge 09

*Write a function which accepts n and a linked list as it's arguments, and will return the nth from last node in a linked list*

---

## Install and Getting Started
To start this application, fork and git clone this repository to your local computer. Navigate from your terminal to the directory `challenge-09` and run the command `npm install`, this will install all necessary packages to operate.

To run the application, in the command line, enter `node index.js <number>`, the number will represent the node you wish to find in the singly linked list. If it does not exist, you will recieve a message, or if the entry is invalid, you will recieve `null`.

## Data Structures

### Solution Module
The solution module contains two methods, one that reverses a singly linked list and another that finds the nth node from the end of a list. The `reverse` method has an arity of one and accepts only a singly linked list as an argument. The `findNthNodeFromEnd` method has an arity of two and only accepts a singly linked list and a number as an argument.

`reverse` - takes a linked list and reverses it:

```javascript
let sll = {head: {value: 1, next: {value: 2, next: null}}};
solution.reverse(sll);
// returns {head: {value: 2, next: {value: 1, next: null}}}
```
`findNthNodeFromEnd` - takes a singly linked list and a number and finds the node represting that number node from the end of the list:

```javascript
let sll = {head: {value: 1, next: {value: 2, next: null}}};
solution.findNthNodeFromEnd(sll, 1);
// returns {value: 1, next: [node]}
```
### SLL Module and Nd Module
These are helper modules that creates a linked list for the index.js file.