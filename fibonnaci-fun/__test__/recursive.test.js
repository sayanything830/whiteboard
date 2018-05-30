'use strict';

const recurFindFibN = require('../lib/recursive');
require('jest');

describe('Find Nth Element in Fibonacci Sequence Recursively', function() {
  describe('Valid Arguments', () => {
    it('should return nth number in sequence', () => {
      expect(recurFindFibN(1)).toEqual(0);
      expect(recurFindFibN(10)).toEqual(34);
    });
  });
  describe('Invalid Arguments', () => {
    it('should return an error if number less that 1 is passed', () => {
      expect(recurFindFibN(0)).toMatch(/Error/);
    });
    it('should return an error if the argument is not a number', () => {
      expect(recurFindFibN('a')).toMatch(/Error/);
      expect(recurFindFibN([1])).toMatch(/Error/);
      expect(recurFindFibN(true)).toMatch(/Error/);
    });
    it('should return an error if no argument is passed', () => {
      expect(recurFindFibN()).toMatch(/Error/);
    });
  });
});
