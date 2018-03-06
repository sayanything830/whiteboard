'use strict';

const SLL = require('./sll');

module.exports = function(tree) { // Big O notation: O(n)
  // -- validate -- //
  if(!tree) return null;
  if(!tree.root) return null;
  if(typeof tree !== 'object') return null;

  let result = tree.inOrderTraversal();

  let sorted = result.sort((a,b) => a - b);

  let sll = new SLL();

  for(let val in sorted) {
    if(typeof sorted[val] !== 'number') return 'Error, value not a number';
    sll.insertEnd(sorted[val]);
  }

  return sll;
};

