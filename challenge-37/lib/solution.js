'use strict';

const SLL = require('./sll');

module.exports = function(tree) {
  // -- validate -- //
  if(!tree.root) return null;
  if(typeof tree !== 'object') return null;

  let result = tree.inOrderTraversal();

  let sorted = result.sort();

  let sll = new SLL();

  for(let val in sorted) {
    sll.insertEnd(sorted[val]);
  }

  return sll;
};

