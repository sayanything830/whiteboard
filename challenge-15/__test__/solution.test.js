'use strict';

const Tree = require('../lib/tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#childLess', () => {
    let tree = new Tree();
    tree.insert(1);
    tree.insert(2, 1);
    tree.insert(3, 1);
    tree.insert(4, 2);
    tree.insert(4, 2);
    tree.insert(6, 2);

    describe('Valid arguments', () => {
      it('should return an array', () => {
        expect(solution.childLess(tree)).toBeInstanceOf(Array);
      });
      it('should return the nodes with no children', () => {
        expect(solution.childLess(tree)[0]).toBeInstanceOf(Object);
      });
    });
    describe('Invalid arguments', () => {
      it('should return null if argument is not an object', () => {
        expect(solution.childLess(1)).toBeNull();
        expect(solution.childLess('a')).toBeNull();
      });
      it('should return null if no argument is passed', () => {
        expect(solution.childLess()).toBeNull();
      });
    });
  });
});