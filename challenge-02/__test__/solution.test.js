'use strict';

const solution = require('./solution.js');

describe('Solution Module', () => {
  describe('#Solution', () => {
    it('should varify all elements in array are numbers', () => {
      expect(solution.highScore([1, 2, 'cat'])).toBeNull();
    });
    it('should allow duplicate high scores to be highest and second highest', () => {
      expect(solution.highScore([1, 2, 2])).toEqual({highest: 2, secondHighest: 2})
    })
  });
});
