'use strict';

const Nd = require('./node.js');

class SLL {
  constructor() {
    this.head = null;
    this.listLength = 0;
  }

  insertHead(val) { // Big O: O(1), creates a node, no iteration
    if(!val) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    this.listLength ++;
    return this;
  }

  insertEnd(val) { // Big O: best case O(1) if no other node exists, worst case O(n), iterates to end of list before creating
    if(!val) return null;
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      this.listLength ++;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.listLength ++;
    return this;
  }
}

module.exports = SLL;