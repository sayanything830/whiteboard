'use strict';

module.exports = function(arrOne, arrTwo) {
  // -- validate -- //
  if(!arrOne || !arrTwo) return null;
  if(!Array.isArray(arrOne) || !Array.isArray(arrTwo)) return null;
  if(!arrOne.length || !arrTwo.length) return [];

  let table = {};
  let result = [];

  for(let i in arrOne) {
    if(!table[arrOne[i]]) {
      table[arrOne[i]] = [arrOne[i]];
    }
  }

  for(let i in arrTwo) {
    if(table[arrTwo[i]]) {
      result.push(arrTwo[i]);
    }
  }

  let noDuplicate = Array.from(new Set(result));

  return noDuplicate;
};
