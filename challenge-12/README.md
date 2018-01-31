# Whiteboard Challenge 12

*Implement a Queue using only two Stacks*

---

## Installing and Getting Started
Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To use, in your terminal, enter `node index.js <number> <number> <number> <number> <number>`, each `<number>` represents a number typed in, separated by a space.

Example:

`node index.js 1 2 3 4 5`

returns:

```
stacks before removing:  Queue {
  one: { top: { value: 5, next: [Object] }, size: 5 },
  two: { top: null, size: 0 } }

first node removed:  { value: 1, next: null }
remaining in stacks:  Queue {
  one: { top: null, size: 0 },
  two: { top: { value: 2, next: [Object] }, size: 4 } }

second node removed:  { value: 2, next: null }
remaining in stacks:  Queue {
  one: { top: null, size: 0 },
  two: { top: { value: 3, next: [Object] }, size: 3 } }

third node removed:  { value: 3, next: null }
remaining in stacks:  Queue {
  one: { top: null, size: 0 },
  two: { top: { value: 4, next: [Object] }, size: 2 } }

fourth node removed:  { value: 4, next: null }
remaining in stacks:  Queue {
  one: { top: null, size: 0 },
  two: { top: { value: 5, next: null }, size: 1 } }

fifth node removed:  { value: 5, next: null }
```

---

## Data Structures

### Solution Module
This solution module contains a constructor function and two prototype methods. The `Queue` constructor function creates a two stacks, the `enqueue` method adds nodes to the first stack, the `dequeue` method pushes each node from stack one to stack two and pops the top node from stack two once stack one is empty.

Examples:

```javascript
let q = new Queue();
q.enqueue(1);
console.log(q); // Queue {
  // one: { top: { value: 1, next: null }, size: 1 },
  // two: { top: null, size: 0 } }
```

```javascript
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue()); 
// {value: 3, next: null}

console.log(q); 
// Queue {
// one: { top: null, size: 0 },
// two: { top: { value: 2, next: [Object] }, size: 2 } }
```

---


## Tests

* Checks that the Queue constructor creates two stacks
* Checks that valid input for enqueue returns valid output
* Checks invalid arguments return error messages
* Checks dequeue removes the first node added to first stack
* Checks dequeue continues to remove nodes in a first in/first out order