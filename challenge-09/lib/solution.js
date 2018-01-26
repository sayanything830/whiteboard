'use strict';

const solution = module.exports = {};


solution.findNthNodeFromEnd = function(sll, n) {
  if(n < 1) return null;
  if(!n) return null;

  let revSll = solution.reverse(sll);

  let curr = revSll.head;

  for(let i = 0; i < n; i ++) {
    curr = curr.next;
    if(!curr) return 'this node does not exist';
  }

  sll = solution.reverse(revSll);

  return curr;
};



solution.reverse = function(sll) {
  if(!sll || !Object.keys(sll).length) return null;
  let curr, nxt, prev;

  curr = sll.head;
  nxt = null;
  prev = null;

  sll.head = null;

  while(!sll.head) {
    curr.next ? nxt = curr.next : nxt = null;
    prev ? curr.next = prev : curr.next = null;
    prev = curr;
    nxt ? curr = nxt : sll.head = curr;
  }
  
  return sll;
};

