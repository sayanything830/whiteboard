'use strict';

// Option 1 Code //
const solution = module.exports = {};

solution.highScores = arr => {
  if(Array.isArray(arr) === false) return null;

  if(arr.length === 0) return null;

  if(arr.length === 1) {
    return {
      highest: arr[0],
      secondHighest: null,
    };
  }

  arr.sort((a, b) => a - b);
  let obj = {
    highest: arr[arr.length - 1],
    secondHighest: arr[arr.length - 2],
  };
  return obj;
};
