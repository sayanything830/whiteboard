'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  describe('Valid input', () => {
    it('should return a number', () => {
      expect(typeof solution(2, 2)).toBe('number');
    });
    it('should accept floating point integers', () => {
      expect(solution(2.2, 3.3)).toBeTruthy();
    });
    it('should return the sum of integer values from an exponential value', () => {
      expect(solution(2, 7)).toEqual(11);
    });
  });
  describe('Invalid input', () => {
    it('should return null if arguments are missing', () => {
      expect(solution()).toBeNull();
      expect(solution(1)).toBeNull();
    });
    it('should return null if 0 is passed as an argument', () => {
      expect(solution(0, 3)).toBeNull();
    });
    it('should return null if argument is not a number', () => {
      expect(solution('two', 6));
    });
  });
});
