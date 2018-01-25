'use strict';

const solution = require('../lib/solution.js');
const SLL = require('../lib/sll.js');
require('jest');


let list = new SLL();
list.insertEnd(10);
list.insertEnd(9);
list.insertEnd(8);
list.insertEnd(7);


let list2 = new SLL();
list2.insertEnd(8);
list2.insertEnd(7);
list2.insertEnd(6);
list2.insertEnd(5);


let answer = {head: { value: 8, next: { value: 7, next: null } } };
let wrong = {head: { value: 10, next: { value: 5, next: null } } };

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(solution()).toBe(null);
  });
  it('checks to see what was passed in in not a string', function() {
    expect(solution('hello', list)).toBe(null);
    expect(solution('hello')).toBe(null);
  });
  it('checks to see if was passed in is not a number', function() {
    expect(solution(5)).toBe(null);
  });
  it('checks to see if its the right answer', function() {
    expect(solution(list, list2)).toEqual(answer);
    expect(solution(list, list2)).not.toEqual(wrong);
  });
});