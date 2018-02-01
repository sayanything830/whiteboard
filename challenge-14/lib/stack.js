'use strict';

const Node = require('./node.js');

class Stack {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(value) {
    if(this.size === this.maxsize) throw new Error('Stack Overflow');

    let node = new Node(value);

    node.next = this.top;
    this.top = node;
    this.size ++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size --;
    return temp;
  }

  peek() {
    return this.top;
  }
}

module.exports = Stack;