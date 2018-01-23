'use strict';

// Big O notation: Worst case O(n), iterates through list once
module.exports = function(sll) {// takes in a single link list argument

  // invalid arguments
  if(!sll) return null;
  if(!Object.keys(sll).length) return null;
  
  // create a copy of the linked list
  let sll2 = Object.assign({}, sll);

  // create a current pointer for node
  let curr = sll2;

  // while current node has a next node
  while(curr.next) {
    // if current node has `seen` property, return true, it is circular
    if(curr.next.seen === true) return true;
    // assign  `seen` property to node
    curr.seen = true;
    // move to the next node
    curr = curr.next;
    
  }
  // otherwise return false, this linked list is not circular
  return false;
};
