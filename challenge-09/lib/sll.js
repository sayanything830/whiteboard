'use strict';

const Nd = require('./nd.js');

class SLL {
  constructor() {
    this.head = null;
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
    // this.listLength ++;
    return this;
  }
}

module.exports = SLL;