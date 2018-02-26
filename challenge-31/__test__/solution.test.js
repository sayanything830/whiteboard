'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  let arrOne = [1, 2, 2, 3, 4];
  let arrTwo = [2, 2, 4, 1, 5];
  let arrThree = [];
  let arrFour = [3, 4, 5];
  let arrFive = [7, 8, 9];
  describe('Valid input', () => {

    it('should return a new array', () => {
      expect(solution(arrOne, arrTwo)).toBeInstanceOf(Array);
    });
    it('should return only the intersecting values', () => {
      expect(solution(arrOne, arrFour)).toEqual([3, 4]);
    });
    it('should remove duplicate intersections', () => {
      expect(solution(arrOne, arrTwo)).toEqual([2, 4, 1]);
    });
    it('should return an empty array if no intersection', () => {
      expect(solution(arrOne, arrFive)).toEqual([]);
    });
  });
  describe('Invalid input', () => {
    it('should return an empty array if an argument is empty', () => {
      expect(solution(arrOne, arrThree)).toEqual([]);
    });
    it('should return null if argument is not an array', () => {
      expect(solution(arrOne, 2)).toBeNull();
    });
    it('should return null if no argument is passed', () => {
      expect(solution()).toBeNull();
      expect(solution(arrOne)).toBeNull();
    });
  });
});
