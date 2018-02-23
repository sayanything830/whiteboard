'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  let array = ['cat', 'race', 'x', 'tac', 'acre'];
  let arrayTwo = ['x'];

  describe('valid input', () => {
    it('should return a new array', () => {
      expect(solution(array)).toBeInstanceOf(Array);
      expect(solution(array)).toEqual(['cat','tac','race','acre','x']);
    });
    it('should return the same array if it includes only one element', () => {
      expect(solution(arrayTwo)).toEqual(arrayTwo);
    });
  });
  describe('invalid input', () => {
    it('should return null if no argument is passed', () => {
      expect(solution()).toBeNull();
    });
    it('should return null if argument is not an array', () => {
      expect(solution(1)).toBeNull();
    });
    it('should return null if array does not contain all strings', () => {
      expect(solution([1])).toBeNull();
    });
  });
});
