'use strict';

const iterFib = require('../lib/solution');

describe('Iterative Solution', function() {
  describe('Valid Input', () => {
    it('should return the number representing where it occurs in the Fibonacci scale', () => {
      expect(iterFib(5)).toEqual(3);
    });
    it('should return a number', () => {
      expect(typeof iterFib(5)).toBe('number');
    });
  });
  describe('Invalid Input', () => {
    it('should return an error if number less than 0 is passed', () => {
      expect(iterFib(-1)).toMatch(/Error/);
    });
    it('should return null if no argument is 0 or does not exists (falsey)', () => {
      expect(iterFib(0)).toBeNull();
      expect(iterFib()).toBeNull();
    });
    it('should return null if argument is not a number', () => {
      expect(iterFib('a')).toBeNull();
      expect(iterFib({value: 1})).toBeNull();
      expect(iterFib([1])).toBeNull();
    });
    it('should return an error if argument is not an integer', () => {
      expect(iterFib(1.4)).toMatch(/Error/);
    });
  });
});
