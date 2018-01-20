'use strict';

//should return null if no argument passed
//should return null if not two keys in object
//should return null if typeof argument is not object
//should return valid object in middle of linked list

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#Find Middle Node', () => {

    //valid single linked list
    let sllOne = {
      value: 'a',
      next: {
        value:'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    };

    //missing 'next' key in last object
    let sllTwo = {
      value: 1,
      next: {
        value:2,
        next: {
          value: 3,
        },
      },
    };

    it('should return the valid middle node', () => {
      expect(solution.findMiddleNode(sllOne)).toEqual({ value: 'b', next: { value: 'c', next: null } });
      // console.log(solution.findMiddleNode(sllOne));
    });
    it('should return null if two keys do not exist per node', () => {
      expect(solution.findMiddleNode(sllTwo)).toBeNull();
    });
    it('should return null if argument passed is not an object', () => {
      expect(solution.findMiddleNode(1)).toBeNull();
    });
    it('should return null if no argument is passed', () => {
      expect(solution.findMiddleNode()).toBeNull();
    });
  });
});
