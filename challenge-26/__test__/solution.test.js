'use strict';

const utils = require('../lib/solution');

describe('Solutions', function() {

  let cbMap = function(x) {
    return x * 2;
  };

  let cbFilter = function() {
    return 2;
  };

  let cbReduce = function(a, b) {
    return a + b;
  };

  let arr = [1, 2, 3];

  describe('map valid', () => {
    it('should return a new array', () => {
      expect(utils.map(arr, cbMap)).toEqual([2, 4, 6]);
    });
    it('should not change the original array', () => {
      expect(utils.map(arr, cbMap)).not.toEqual(arr);
    });
  });
  describe('map invalid', () => {
    it('should return null if missing arguments', () => {
      expect(utils.map(cbMap)).toBeNull();
      expect(utils.map(arr)).toBeNull();
    });
    it('should return null if arr is not an array', () => {
      expect(utils.map(1, cbMap)).toBeNull();
    });
    it('should return null if callback is not a function', () => {
      expect(utils.map(arr, 1)).toBeNull();
    });
  });

  describe('filter valid', () => {
    it('should return a new array', () => {
      expect(utils.filter(arr, cbFilter)).toEqual([2]);
    });
    it('should not change the original array', () => {
      expect(utils.filter(arr, cbFilter)).not.toEqual(arr);
    });
  });
  describe('filter invalid', () => {
    it('should return null if missing arguments', () => {
      expect(utils.filter(cbFilter)).toBeNull();
      expect(utils.filter(arr)).toBeNull();
    });
    it('should return null if arr is not an array', () => {
      expect(utils.filter(1, cbFilter)).toBeNull();
    });
    it('should return null if callback is not a function', () => {
      expect(utils.filter(arr, 1)).toBeNull();
    });
  });
  describe('reduce valid', () => {
    it('should return a value', () => {
      expect(utils.reduce(arr, cbReduce, 0)).toEqual(6);
    });
    it('should not change the original array', () => {
      expect(utils.reduce(arr, cbReduce, 0)).not.toEqual(arr);
    });
  });
  describe('reduce invalid', () => {
    it('should return null if missing arguments', () => {
      expect(utils.reduce(cbReduce)).toBeNull();
      expect(utils.reduce(arr)).toBeNull();
    });
    it('should return null if arr is not an array', () => {
      expect(utils.reduce(1, cbReduce)).toBeNull();
    });
    it('should return null if callback is not a function', () => {
      expect(utils.reduce(arr, 1)).toBeNull();
    });
  });
});
