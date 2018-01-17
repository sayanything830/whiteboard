'use strict';

const train = require('../lib/solution.js');
require('jest');

let testTrain = {
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
    it('should return null if object is empty', () => {
      expect(train.passengerCount(testTwo)).toBeNull();
    });
  });
});
