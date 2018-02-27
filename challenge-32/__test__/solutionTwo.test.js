'use strict';

const recurFib = require('../lib/solutionTwo');

describe('Iterative Solution', function() {
  describe('Valid Input', () => {
    it('should return the number representing where it occurs in the Fibonacci scale', () => {
      expect(recurFib(5)).toEqual(3);
    });
    it('should return a number', () => {
      expect(typeof recurFib(5)).toBe('number');
    });
  });
  describe('Invalid Input', () => {
    it('should return an error if number less than 0 is passed', () => {
      expect(recurFib(-1)).toMatch(/Error/);
    });
    it('should return null if no argument is 0 or does not exists (falsey)', () => {
      expect(recurFib(0)).toBeNull();
      expect(recurFib()).toBeNull();
    });
    it('should return null if argument is not a number', () => {
      expect(recurFib('a')).toBeNull();
      expect(recurFib({value: 1})).toBeNull();
      expect(recurFib([1])).toBeNull();
    });
    it('should return an error if argument is not an integer', () => {
      expect(recurFib(1.4)).toMatch(/Error/);
    });
  });
});
