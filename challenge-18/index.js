'use strict';

const Tree = require('./lib/tree.js');
const solution = require('./lib/solution.js');

let tree = new Tree();
tree.insert(1);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 2);
tree.insert(7, 2);
tree.insert(8, 3);

console.log(solution(tree));