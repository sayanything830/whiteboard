'use strict';

const solution = require('../lib/solution.js');
const Tree = require('../lib/tree.js');
const SLL = require('../lib/sll.js');

describe('Solution Module', function() {
  describe('Valid input', () => {
    let pine = new Tree();
    pine.insert(1);
    pine.insert(2, 1);
    pine.insert(3, 1);
    pine.insert(6, 2);
    pine.insert(5, 2);
    pine.insert(7, 3);
    pine.insert(4, 3);

    let cedar = new Tree();
    cedar.insert(4);
    cedar.insert(1, 4);
    cedar.insert(9, 4);
    cedar.insert(2, 9);

    it('should return a SLL', () => {
      expect(solution(pine)).toBeInstanceOf(SLL);
    });
    it('should return a sorted linked list', () => {
      expect(solution(cedar).head.value).toEqual(1);
      expect(solution(cedar).head.next.value).toEqual(2);
    });
  });
  describe('Invalid input', () => {
    it('should return null if no tree is passed', () => {
      expect(solution()).toBeNull();
    });
    it('should return null if argument data type is not a tree', () => {
      expect(solution(2)).toBeNull();
      expect(solution('a')).toBeNull();
    });
  });
});