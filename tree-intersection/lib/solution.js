'use strict';

// Function that takes in two trees and returns a set of values found in both trees
const findMatch = (tree1, tree2) => {
  // traverse both trees and push all values to an array
  const arr1 = tree1.inOrderTraversal();
  const arr2 = tree2.inOrderTraversal();
  // define an empty map
  const map = {};
  // define an empty results array
  let results = [];

  // iterate through values of first tree
  for(let i in arr1) {
    // assign properties to map object
    if(!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  // iterate through values of second tree
  for(let i in arr2) {
    // if they exist in the map object, push to results array
    if(map[arr2[i]]) {
      results.push(arr2[i]);
    }
  }

  // if no matches were found
  if(!results.length) return 'no matches found';

  // re-assign results as a unique set of values found in both trees (no repeats)
  results = new Set(results);
  return results;
};

// ------ Defining tree nodes and binary tree classes and methods ---------- //

// Creates tree nodes
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creates binary tree and methods for tree object
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Traverse tree in order
  inOrderTraversal() {
    if(!this.root) return null;
    this.inOrderArr = [];
    this._inOrderTraversal(this.root);
    return this.inOrderArr;
  }

  _inOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit left
    this._inOrderTraversal(root.left);
    // visit root and push value to array
    this.inOrderArr.push(root.value);
    //visit right
    this._inOrderTraversal(root.right);
  }
}

module.exports.findMatch = findMatch;
module.exports.BinaryTree = BinaryTree;
module.exports.TreeNode = TreeNode;
