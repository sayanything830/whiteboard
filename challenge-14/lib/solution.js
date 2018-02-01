'use strict';

'use strict';

const SLL = require('./sll.js');
const Stack = require('./stack.js');

module.exports = function(sll) { // Big O notation: O(n)
  
  // Validation
  if(!sll) return null;
  if(typeof sll === 'number' || typeof sll === 'string') return null;
  if(sll.head === null) return null;
  if(sll.head.next === null) return sll;

  // Create a stack and new linked list
  let stack = new Stack();
  let list = new SLL();

  // Pointer to head of linked list
  let curr = sll.head;

  // Iterate through linked list
  while(curr) {

    // If stack is empty, push head node into stack
    if(stack.top === null) {
      stack.push(curr.value);
      curr = curr.next;
    }

    // Look at stack's top value
    let stackTop = stack.peek().value;

    // If top value matches node value, move on to next node in list
    if(curr.value === stackTop) {
      curr = curr.next;
    }
   
    // If top value does not match node value, add node from list to stack
    if(curr.value !== stackTop) {
      stack.push(curr.value);
      curr = curr.next;
    } 
    
  }
  
  // Once stack is full, create new list matching similar order to original list
  while(stack.top) {
    list.insertHead(stack.pop().value);
  }

  // Return new linked list
  return list;
};