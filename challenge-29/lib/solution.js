'use strict';

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

  let sortedWord = array.map(a => a.split('').sort().join(''));

  for(let i in sortedWord) {
    table[sortedWord[i]] ?
      table[sortedWord[i]].push(array[i]) :
      table[sortedWord[i]] = [array[i]];
  }

  for(let property in table) {
    result = result.concat(table[property]);
  }

  return result;
};
