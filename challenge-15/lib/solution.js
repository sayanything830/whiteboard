'use strict';

const Tree = require('./tree');

const solution = module.exports = {};


let tree = new Tree();

tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 3);
tree.insert(7, 3);

solution.childLess = function(root) { // Big O notation: O(n)

  if(!root) return null;
  if(typeof root !== 'object') return null;

  let noChild= [];

  root.breadthFirst(current => {
    if(!current.val.children.length) {

      noChild.push(current.val);
    }
  });
  return noChild;
};

