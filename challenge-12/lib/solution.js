'use strict';

const Stack = require('./stack.js');

module.exports = class Queue { //Big O notation: O(n)
  constructor() {
    this.one = new Stack(); // stack 1
    this.two = new Stack(); // stack 2
  }

  // adding nodes to end of queue (top of stack)
  enqueue(val) {
    if(!val) return 'need a value';
    if(typeof val !== 'number') return 'please enter a number';
    this.one.push(val); // push node to stack 1
  }

  // removing nodes from front of queue
  dequeue() {
    let stackTwo = this.two;
    let stackOne = this.one;

    while(stackOne.top) { // while stack 1 contains nodes
      stackTwo.push(stackOne.pop().value); // pop each node from stack 1 and push into stack 2
    }

    if(stackTwo.top) { // if stack 2 is full
      let deq = stackTwo.pop(); // remove the top node
      return deq; // return top node (bottom node from stack 1)
    }
  }
};

