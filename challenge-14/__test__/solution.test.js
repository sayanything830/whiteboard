'use strict';

const solution = require('../lib/solution.js');
const SLL = require('../lib/sll.js');

describe('Solution Module', function() {
 
  describe('Valid arguments', () => {
    let sll = new SLL();
    sll.insertEnd(1);
    sll.insertEnd(1);
    sll.insertEnd(2);
    sll.insertEnd(3);
    it('should return a new linked list', () => {
      expect(solution(sll)).toBeInstanceOf(Object);
      expect(solution(sll)).toHaveProperty('head');
    });
    it('should remove a duplicate node', () => {
      expect(solution(sll).head.next.value).toEqual(2);
    });
    it('should have a length of 3 nodes', () => {
      expect(solution(sll).listLength).toEqual(3);
    });
  });

  describe('Invalid arguments and edge cases', () => {
    let sll = new SLL();
    sll.insertEnd(1);
    it('should return null if no linked list is passed', () => {
      expect(solution()).toBeNull();
    });
    it('should return the original list if length is one node', () => {
      expect(solution(sll).listLength).toEqual(1);
      expect(solution(sll)).toEqual({head: {value: 1, next: null}, listLength: 1});
    });
    it('should return null if an invalid type of argument is passed', () => {
      expect(solution(1)).toBeNull();
      expect(solution('a')).toBeNull();
    });
  });
});