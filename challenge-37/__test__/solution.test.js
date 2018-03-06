'use strict';

const solution = require('../lib/solution');
const {BinaryTree, TreeNode} = require('../lib/binary-tree');

describe('Solution Module', function() {
  let one = new TreeNode(1);
  let two = new TreeNode(2.2);
  let three = new TreeNode(3.3);
  let four = new TreeNode(4);
  let five = new TreeNode(5);
  let six = new TreeNode(6);
  let seven = new TreeNode(7);
  let eight = new TreeNode(8);

  let treeOne = new BinaryTree();
  treeOne.root = one;

  one.left = two;
  one.right = three;

  two.left = four;

  let treeTwo = new BinaryTree();
  treeTwo.root = six;

  six.left = five;
  six.right = seven;

  five.left = eight;

  describe('Valid Input', () => {
    it('should return a singly linked list', () => {
      expect(solution(treeOne).head).toBeTruthy();
      expect(typeof solution(treeOne).head.next).toBe('object');
    });
    it('should return sorted nodes', () => {
      expect(solution(treeTwo).head.value).toEqual(5);
      expect(solution(treeTwo).head.next.value).toEqual(6);
    });
    it('should allow floating point integers as values', () => {
      expect(solution(treeOne).head.next.value).toEqual(2.2);
      expect(solution(treeOne).head.next.next.value).toEqual(3.3);
    });
  });
  describe('Invalid Input', () => {
    it('should return null if a tree is not passed as an argument', () => {
      expect(solution('a')).toBeNull();
    });
    it('should return null if no argument is passed', () => {
      expect(solution()).toBeNull();
    });
    it('should return null if tree does not have a root', () => {
      let bt = new BinaryTree();
      let a = new TreeNode(1);
      let b = new TreeNode(2);
      bt.left = a;
      bt.right = b;
      expect(solution(bt)).toBeNull();
    });
    it('should return an error if a tree node value is not a number', () => {
      let bt = new BinaryTree();
      let a = new TreeNode('a');
      let b = new TreeNode(2);
      bt.root = a;
      a.left = b;
      expect(solution(bt)).toMatch(/Error/);
    });
  });
});
