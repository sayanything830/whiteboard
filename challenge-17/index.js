'use strict';

const solution = require('./lib/solution.js');
const Tree = require('./lib/tree.js');


let tree = new Tree();
tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 3);

console.log('Sum of all values in tree: ', solution(tree));