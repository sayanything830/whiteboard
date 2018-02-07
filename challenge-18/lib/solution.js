'use strict';

const Tree = require('./tree.js');

let tree = new Tree();
tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 2);
tree.insert(7, 2);
tree.insert(8, 3);


module.exports = function(tree) {

  let mostChildren = tree.root;

  tree.breadthFirst(current => {
    if(current.children.length > mostChildren.children.length) {
      mostChildren = current;
    }
  });
  return mostChildren;
};