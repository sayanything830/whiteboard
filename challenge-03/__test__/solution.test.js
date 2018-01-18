'use strict';

const train = require('../lib/solution.js');
require('jest');

let testOne = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 4,
      next: {
        value: 5,
        next: null,
      },
    },
  },
};

let testTwo = {};


describe('Train Module', function() {
  describe('#Train', () => {
    it('should only alow objects to be passed in an argument', () => {
      expect(train.passengerCount(124)).toBeNull();
    });
    it('should return undefined if object is empty', () => {
      expect(train.passengerCount(testTwo)).toBe(undefined);
    });
    it('should recognize endpoint when value of `next` is null', () => {
      expect(train.passengerCount(testOne)).toEqual(14);
    });
    it('should iterate through each nested object and consol log the passenger count for each car', () => {
      expect(train.passengerCount(testOne)).toEqual(28);
    });
  });
});
