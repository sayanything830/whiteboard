'use strict';

const Tree = require('./tree.js');
const SLL = require('./sll.js');

let tree = new Tree();
tree.insert(1);
tree.insert(2, 1);

module.exports = function(tree) { // Big O notation: O(n)
  if(!tree) return null;
  if(typeof tree !== 'object') return null;
  
  let list = [];

  tree.breadthFirst(current => {
    list.push(current.val);
  });

  let sortList = list.sort((a, b) => a - b);
  let sll = new SLL();

  for(let i in sortList) {
    sll.insertEnd(sortList[i]);
  }

  return sll;
};