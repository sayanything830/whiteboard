'use strict';

// const HashTable = require('./lib/hash-table');

// let hash = new HashTable();

module.exports = function(array) {
  let table = {};
  let result = [];

  let sortedWord = array.map(a => a.sort((b, c) => b - c));

  for(let i in sortedWord) {
    table[sortedWord[i]] ?
      table.sortedWord[i].push(array[i]) :
      table.sortedWord[i] = [array[i]];
  }

  for(let property in table) {
    result = result.concat(table[property]);
  }

  return result;
};
