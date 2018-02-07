'use strict';

const Tree = require('../lib/tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let pine = new Tree();
    pine.insert(1);
    pine.insert(2, 1);
    pine.insert(3, 1);
    pine.insert(4, 2);
    pine.insert(5, 2);
    pine.insert(6, 2);
    pine.insert(7, 2);
    pine.insert(8, 3);

    let birch = new Tree();
    birch.insert(1);
    birch.insert(2, 1);
    birch.insert(3, 1);
    birch.insert(4, 2);
    birch.insert(5, 2);

    describe('Valid arguments', () => {
      it('should return a node', () => {
        expect(solution(pine)).toBeInstanceOf(Object);
      });
      it('should return the node with most children', () => {
        expect(solution(pine).children.length).toEqual(4);
      });
      it('should return the first instance of a node with an equal amount of most children', () => {
        expect(solution(birch).val).toEqual(1);
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