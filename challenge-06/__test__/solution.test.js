'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#loop', () => {
    it('should return undefined once it count has reached 0', () => {
      let count = 6;
      let callback = solution.loop();
      expect(solution.loop(count, callback)).toBe(undefined);
    });
    it('should return null if anything other than a number is passed as an argument', () => {
      let callback = solution.loop();
      expect(solution.loop('a', callback)).toBeNull();
    });
    it('should return null if less than 2 arguments are passed in', () => {
      expect(solution.loop()).toBeNull();
    });
  });
});