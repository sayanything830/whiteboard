'use strict';

const HashTable = require('./hash-table');
let hashTable = new HashTable();

module.exports = function(array) {
  let table = {};
  let result = [];

  array.map(value => {
    let hash = hashTable.hashKey(value);
    table[hash] ? table[hash].push(value) : table[hash] = [value];
  });

  for(let property in table) {
    if(table[property]) {
      result.push(table[property]);
    }
  }

  return result.reduce((a, b) => a.concat(b));
};
