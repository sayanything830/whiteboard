'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  describe('Valid arguments', () => {
    let arrSquare = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let arrFloat = [
      [1.1, 2.2, 3.3],
      [4.4, 5.5, 6.6],
      [7.7, 8.8, 9.9],
    ];

    let arrRectangle = [
      ['a', 'b', 'c'],
      ['e', 'f', 'g'],
    ];

    it('should return a 90 degree rotated array', () => {
      expect(solution(arrSquare)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });
    it('should allow for floating integers', () => {
      expect(solution(arrFloat)).toEqual([[1.1, 4.4, 7.7], [2.2, 5.5, 8.8], [3.3, 6.6, 9.9]]);
    });
    it('should allow for non-square arrays', () => {
      expect(solution(arrRectangle)).toEqual([['a', 'e'], ['b', 'f'], ['c', 'g']]);
    });
  });
  describe('Invalid arguments', () => {
    it('should return an empty array if original array is empty', () => {
      expect(solution([])).toEqual([]);
    });
    it('should return null if length of sub-arrays are not equal', () => {
      let arr = [[1], [2, 3], [4, 5]];
      expect(solution(arr)).toBeNull();
    });
    it('should return null if no argument is passed', () => {
      expect(solution()).toBeNull();
    });
    it('should return null if argument is not an array', () => {
      expect(solution({text: []})).toBeNull();
    });
  });
});
