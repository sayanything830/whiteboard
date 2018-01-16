'use strict';

// Option 1 Code //
const solution = module.exports = {};

solution.highScores = arr => {
  for(let i in arr) {
    if(typeof i !== 'number') return null;
  }
  if(!arr.length) return null;
  arr.sort((a, b) => a - b);
  let obj = {
    highest: arr[arr.length - 1],
    secondHighest: arr[arr.length - 2],
  };
  return obj;
};
