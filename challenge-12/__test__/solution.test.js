'use strict';

const Queue = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#Queue constructor', () => {
    let q = new Queue();
    it('should create two empty stacks', () => {
      expect(q.one.top).toBe(null);
      expect(q.two.top).toBe(null);
    });
    it('should return a queue', () => {
      expect(q).toBeInstanceOf(Queue);
    });
    it('should contain two stacks', () => {
      expect(q).toHaveProperty('one');
      expect(q).toHaveProperty('two');
    });
  });
  describe('#enqueue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    it('should add nodes to stack one', () => {
      expect(q.one.size).toEqual(2);
      expect(q.two.size).toEqual(0);
    });
    it('should return a message if no value is given', () => {
      expect(q.enqueue()).toBe('need a value');
    });
    it('should return a message if invalid argument type passed', () => {
      expect(q.enqueue({})).toBe('please enter a number');
    });
  });
  describe('#dequeue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    it('should remove bottom node in stack one', () => {
      expect(q.dequeue().value).toEqual(1);
    });
    it('should place nodes from stack one to stack two', () => {
      expect(q.one.size).toEqual(0);
      expect(q.two.size).toEqual(2);
    });
    it('should return the nodes in the order they were placed in the queue', () => {
      expect(q.dequeue().value).toEqual(2);
      expect(q.dequeue().value).toEqual(3);
    });
  });
});