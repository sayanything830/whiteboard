'use strict';

const {BinaryTree, TreeNode} = require('../lib/binary-tree');
const solution = require('../lib/solution');

describe('Solution Module', function() {
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
  describe('Valid input', () => {

    it('should return true if a tree is structurally identical', () => {
      expect(solution(treeOne.root, treeTwo.root)).toBe(true);
    });
    it('should return false if a tree is not structurally identical', () => {
      expect(solution(treeTwo.root, treeThree.root)).toBe(false);
    });
    it('should return true if both trees are empty', () => {
      expect(solution({}, {})).toBe(true);
    });
  });
  describe('Invalid input', () => {
    it('should return null if argument type is invalid', () => {
      expect(solution('a', treeOne.root)).toBeNull();
      expect(solution([treeOne.root], treeTwo.root)).toBeNull();
      expect(solution(treeThree.root, 1)).toBeNull();
    });
    it('should return false is missing second argument', () => {
      expect(solution(treeOne.root)).toBe(false);
    });
  });
});
