'use strict';

module.exports = class HashTable {
  constructor(size=1024) {
    this.size = size;
    this.memory = [...Array(this.size)];
  }

  hashKey(key) {
    let hash = key.split('').sort().join('');
    return hash;
  }

  set(key, value) {
    // Implement the collision direction and handle that through SLL
    // Stretch goal => Implement with buckets as binary trees
    this.memory[this.hashKey(key)] = value;
  }

  get(key) {
    // Implement the lookup for your buckets and their respective data structures
    return this.memory[this.hashKey(key)];
  }

  remove(key) {
    let address = this.hashKey(key);

    this.memory[address] ? delete this.memory[address] : new Error('invalid Key');
  }
};




