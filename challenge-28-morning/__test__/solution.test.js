'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  describe('valid input', () => {
    let string = 'This is a string';
    let stringTwo = 'this is another string';

    it('should return a word', () => {
      expect(solution(string)).toBe('string');
      expect(solution(stringTwo)).toBe('another');
    });

  });
});
