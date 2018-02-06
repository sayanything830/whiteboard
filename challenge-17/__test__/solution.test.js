'use strict';

const Tree = require('../lib/tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let tree = new Tree();
    tree.insert(1);
    tree.insert(2, 1);
    tree.insert(3, 1);
    tree.insert(4, 2);
    tree.insert(5, 2);
    tree.insert(6, 3);

    describe('Valid arguments', () => {
      it('should return a number', () => {
        expect(typeof solution(tree)).toBe('number');
      });
      it('should return the sum of all node values', () => {
        expect(solution(tree)).toEqual(21);
      });
    });
    describe('Invalid arguments', () => {
      it('should return null if argument is not an object', () => {
        expect(solution(1)).toBeNull();
        expect(solution('a')).toBeNull();
      });
      it('should return null if no argument is passed', () => {
        expect(solution()).toBeNull();
      });
    });
  });
});