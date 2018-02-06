'use strict'; 

const Tree = require('./tree.js');

let tree = new Tree();
tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 3);

module.exports = tree => { // Big O notation: O(n)
  if(!tree) return null;
  if(typeof tree !== 'object') return null;

  let sumValue = 0;

  tree.breadthFirst(current => {
    if(!current.val) return 'no value in node';
    sumValue += current.val;
  });
  return sumValue;
};

