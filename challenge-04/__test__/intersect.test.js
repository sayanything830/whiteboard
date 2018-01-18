'use strict';

const intersect = require('../lib/intersect.js');
require('jest');

describe('Intersect Module', function() {
  describe('#Intersector', () => {
    let x = intersect.intersector([1, 2, 3], [2, 3, 4]);
    console.log(intersect.intersector([1, 2, 3], [2, 3, 4]));
    it('should check for two arguments passed into function', () => {
      expect(intersect.intersector([1])).toBeNull();
    });
    it('should check if arguments are arrays', () => {
      expect(intersect.intersector(1)).toBeNull();
    });
    it('should return a separate array with matching elements from initial arguments', () => {
      expect(x).toEqual([2, 3]);
    });
  });
});
