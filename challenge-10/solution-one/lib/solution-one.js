'use strict';

const Stack = require('./stack.js');

const solution = module.exports = {};

solution.checkBraces = function(str) { // Big O notation: O(n)
  if (typeof str !== 'string') return null;
  let stack = new Stack();
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '{') {
      stack.push(strArr[i]);
    }
    if (strArr[i] === '}') {
      if (stack.size === 0) return false;
      stack.pop();
    }
  }
  return !stack.size;
};