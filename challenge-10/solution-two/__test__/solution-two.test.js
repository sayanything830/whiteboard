'use strict';

const solution = require('../lib/solution-two.js');

describe('Solution Two Module', function() {
  describe('#Solution Two', () => {
    let arr = [1, 2, 3, 4, 5];
    describe('Valid Arguments', () => {
      it('should return an object', () => {
        expect(solution(arr, 5)).toBeInstanceOf(Object);
      });
      it('should return the index', () => {
        expect(solution(arr, 5).index).toEqual(4);
      });
      it('should return the value of n', () => {
        expect(solution(arr, 5).value).toEqual(5);
      });
    });
    describe('Invalid Arguments', () => {
      it('should return null if an argument is missing', () => {
        expect(solution(arr)).toBeNull();
        expect(solution(8)).toBeNull();
      });
      it('should return a message if n does not exist in array', () => {
        expect(solution(arr, 15)).toBe('15 does not exist in this array');
      });
      it('should return null if the type of arguments are invalid', () => {
        expect(solution(3, arr)).toBeNull();
        expect(solution(arr, 'hi')).toBeNull();
      });
    });
  });
});