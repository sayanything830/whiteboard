'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', () => {
  describe('#Solution One', () => {
    it('should return null if argument passed is not an array', () => {
      expect(solution.highScoreOne('cat')).toBeNull();
    });
    it('should allow duplicate high scores to be highest and second highest', () => {
      expect(solution.highScoreOne([1, 2, 2])).toEqual({highest: 2, secondHighest: 2});
    });
    it('should return highest value and null if there is only one element in array', () => {
      expect(solution.highScoreOne([5])).toEqual({highest: 5, secondHighest: null});
    });
    it('should return null if array is empty', () => {
      expect(solution.highScoreOne([])).toBeNull;
    });
  });

  describe('#Solution Two', () => {
    it('should return null if no argument is passed', () => {
      expect(solution.highScoreTwo()).toBeNull();
    });
    it('should return highest value and null if there is only one element in array', () => {
      expect(solution.highScoreTwo([5])).toEqual({highest: 5, secondHighest: null});
    });
    it('should return null if array is empty', () => {
      expect(solution.highScoreTwo([])).toBeNull;
    });
    it('should return null if anything other than a number in in array', () => {
      expect(solution.highScoreTwo([1, 2, 'cat'])).toBeNull;
    });
  });

});
