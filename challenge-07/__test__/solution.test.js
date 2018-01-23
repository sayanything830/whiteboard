'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#Solution', () => {
    it('should return true if singly linked list is circular', () => {
      let a = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
      a.next.next = a.next
      expect(solution(a)).toBe(true);
    });
    it('should return false if singly linked list is not circular', () => {
      let a = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
      expect(solution(a)).toBe(false);
    });
    it('should return null if invalid argument is passed', () => {
      expect(solution({})).toBeNull();
    });
  });
});