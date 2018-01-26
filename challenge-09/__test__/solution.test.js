'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#Reverse', () => {
    let sll = {head: {value: 1, next: {value: 2, next: null}}};
    it('should reverse a singly linked list', () => {
      expect(solution.reverse(sll)).toEqual({head: {value: 2, next: {value: 1, next: null}}});
    });
    it('should return null if no argument is passed in', () => {
      expect(solution.reverse()).toBeNull();
    });
    it('should return null if the singly linked list is empty', () => {
      expect(solution.reverse({})).toBeNull();
    });
  });
  describe('#FindNthNodeFromEnd', () => {
    let sll = {head: {value: 1, next: {value: 2, next: null}}};
    it('should return the nth node from end with valid arguments', () => {
      expect(solution.findNthNodeFromEnd(sll, 1).value).toEqual(1);
    });
    it('should return error message if n is greater than length of list', () => {
      expect(solution.findNthNodeFromEnd(sll, 5)).toBe('this node does not exist');
    });
    it('should return null if n is not passed in', () => {
      expect(solution.findNthNodeFromEnd(sll)).toBeNull();
    });
  });
});