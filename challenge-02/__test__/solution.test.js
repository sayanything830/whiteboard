'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', () => {
  describe('#Solution', () => {
    it('should return null if argument passed is not an array', () => {
      expect(solution.highScores('cat')).toBeNull();
    });
    it('should allow duplicate high scores to be highest and second highest', () => {
      expect(solution.highScores([1, 2, 2])).toEqual({highest: 2, secondHighest: 2});
    });
    it('should return highest value and null if there are less than 2 elements in array', () => {
      expect(solution.highScores([5])).toEqual({highest: 5, secondHighest: null});
    });
    it('should return null if array is empty', () => {
      expect(solution.highScores([])).toBeNull;
    });
  });
});
