'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(root=null) {
    this.root = root;
  }
}

module.exports.BinaryTree = BinaryTree;
module.exports.TreeNode = TreeNode;
