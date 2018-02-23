'use strict';

const HashTable = require('./hash-table');
let hashTable = new HashTable();

module.exports = function(array) { // O(n)
  //Validators
  if(!array) return null;
  if(!Array.isArray(array)) return null;
  for(let i in array) {
    if(typeof array[i] !== 'string') return null;
  }
  if(array.length === 1) return array;

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
