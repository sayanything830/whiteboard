'use strict';

const solution = require('../lib/solution-one.js');

describe('Solution One Module', function() {
  describe('#CheckBraces', () => {
    let trueBrace = '{a{b{a}}{c}}';
    let falseBrace = '}{';

    describe('Valid Arguments', () => {
      it('should return true if braces match', () => {
        expect(solution.checkBraces(trueBrace)).toBe(true);
      });
      it('should return false if braces do not match', () => {
        expect(solution.checkBraces(falseBrace)).toBe(false);
      });
      it('should return true if no braces exist in string', () => {
        expect(solution.checkBraces('')).toBe(true);
      });
    });
    describe('Invalid Arguments', () => {
      it('should return null if a string is not passed in', () => {
        expect(solution.checkBraces([1, 2, 3])).toBeNull();
        expect(solution.checkBraces({})).toBeNull();
        expect(solution.checkBraces(true)).toBeNull();  
      });
    });
  });
});