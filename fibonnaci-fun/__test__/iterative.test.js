'use strict';

const fibFindN = require('../lib/iterative');
require('jest');

describe('Find Nth Element in Fibonacci Sequence Iteratively', function() {
  describe('Valid Arguments', () => {
    it('should return nth number in sequence', () => {
      expect(fibFindN(1)).toEqual(0);
      expect(fibFindN(10)).toEqual(34);
    });
  });
  describe('Invalid Arguments', () => {
    it('should return an error if number less that 1 is passed', () => {
      expect(fibFindN(0)).toMatch(/Error/);
    });
    it('should return an error if the argument is not a number', () => {
      expect(fibFindN('a')).toMatch(/Error/);
      expect(fibFindN([1])).toMatch(/Error/);
      expect(fibFindN(true)).toMatch(/Error/);
    });
    it('should return an error if no argument is passed', () => {
      expect(fibFindN()).toMatch(/Error/);
    });
  });
});
