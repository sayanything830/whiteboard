'use strict';

const {BinaryTree, TreeNode} = require('./lib/binary-tree');
const solution = require('./lib/solution');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);
let ten = new TreeNode(10);
let eleven = new TreeNode(11);
let twelve = new TreeNode(12);
// let thirteen = new TreeNode(13);

let treeOne = new BinaryTree();
treeOne.root = one;

one.left = two;
one.right = three;

two.left = four;

let treeTwo = new BinaryTree();
treeTwo.root = five;

five.left = six;
five.right = seven;

six.left = eight;

let treeThree = new BinaryTree();
treeThree.root = nine;

nine.left = ten;
nine.right = eleven;

eleven.right = twelve;


console.log('should be true:', solution(treeOne.root, treeTwo.root));
console.log('should be false:', solution(treeTwo.root, treeThree.root));
console.log('should be null', solution('a', treeOne.root));
console.log('should be null', solution(1, treeOne.root));
console.log('should be null', solution([treeTwo.root], treeOne.root));

