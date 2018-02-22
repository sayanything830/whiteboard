'use strict';

module.exports = function(array) {
  let table = {};
  let result = [];

  let sortedWord = array.map(a => a.split('').sort().join(''));

  // console.log(sortedWord);

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
