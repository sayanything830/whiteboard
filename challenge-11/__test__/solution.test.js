'use strict';
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let arr = [8, 2, 3, 7, 1, 4, 6];
    let arrOne = [5, 4, 3, 2, 1];
    let arrTwo = [7, 2, 3, 3, 1, 4, 6];
    describe('Valid arguments', () => {
      it('should return the missing number', () => {
        expect(solution(arr)).toEqual(5);
      });
    });
    describe('Invalid arguments', () => {
      it('should return null if argument is not an array', () => {
        expect(solution('a')).toBeNull();
      });
      it('should return a message if no numbers are missing in array', () => {
        expect(solution(arrOne)).toBe('no missing numbers');
      });
      it('should return null if there are duplicate numbers in array', () => {
        expect(solution(arrTwo)).toBeNull();
      });
    });
  });
});