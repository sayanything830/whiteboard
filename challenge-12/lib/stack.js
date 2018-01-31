'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if(this.size === this.maxSize) throw new Error('Stack Overflow');

    let node = new Node(value);

    node.next = this.top;
    this.top = node;
    this.size ++;
    return this.top;
  }

  pop() {
    if(!this.top) throw new Error('Stack is empty');
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size --;
    return temp;
  }

  peek() {
    if(!this.top) throw new Error('Stack is empty');
    return this.top;
  }
};