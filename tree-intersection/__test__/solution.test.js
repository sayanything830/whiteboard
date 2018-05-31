'use strict';

const { findMatch, BinaryTree, TreeNode } = require('../lib/solution');
require('jest');

describe('Tree Intersection', function() {
  describe('Valid Arguments', () => {
    let one = new TreeNode('1');
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    let seven = new TreeNode(7);
    let one1 = new TreeNode('1');
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
    it('should return a set of values that exist in both trees', () => {
      expect(findMatch(tree1, tree2).has('1')).toBe(true);
      expect(findMatch(tree1, tree2).has(3)).toBe(true);
      expect(findMatch(tree1, tree2).has(5)).toBe(true);
      expect(findMatch(tree1, tree2).has(7)).toBe(true);
    });
    it('should return a set', () => {
      expect(findMatch(tree1, tree2)).toBeInstanceOf(Set);
    });
    it('should return a message if no matches are found', () => {
      let a = new TreeNode('a');
      let b = new TreeNode('b');
      let c = new TreeNode('c');
      let d = new TreeNode('d');
      let e = new TreeNode('e');
      let f = new TreeNode('f');
      let g = new TreeNode('g');

      const treeA = new BinaryTree();
      treeA.root = a;
      a.left = b;
      a.right = c;
      b.right = d;

      const treeB = new BinaryTree();
      treeB.root = e;
      e.left = f;
      e.right = g;

      expect(findMatch(treeA, treeB)).toBe('no matches found');
    });
  });
  describe('Invalid Arguments', () => {
    it('should return null if tree does not have a root', () => {
      expect(findMatch(1, 2)).toBeNull();
    });
    it('should return null one or no trees are passed', () => {
      const oneNode = new TreeNode(1);
      const oneTree = new BinaryTree();
      oneTree.root = oneNode;
      expect(findMatch(oneTree)).toBeNull();
      expect(findMatch()).toBeNull();
    });
  });
});
