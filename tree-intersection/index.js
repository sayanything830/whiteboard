'use strict';

const { findMatch, BinaryTree, TreeNode } = require('./lib/solution');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let seven = new TreeNode(7);

let one1 = new TreeNode(1);
let three3 = new TreeNode(3);
let five5 = new TreeNode(5);
let six = new TreeNode(6);
let seven7 = new TreeNode(7);

const tree1 = new BinaryTree();
tree1.root = one;
one.left = two;
one.right = three;
two.right = four;
two.left = seven;
three.left = five;

const tree2 = new BinaryTree();
tree2.root = one1;
one1.left = three3;
one1.right = seven7;
three3.left = five5;
three3.right = six;

console.log(findMatch(tree1, tree2));
