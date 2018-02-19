'use strict';

const utils = module.exports = {};

utils.map = function(arr, callback) { //Big O notation: O(n)
  //Validate
  if(!arr || !callback) return null;
  if(!Array.isArray(arr)) return null;
  if(typeof callback !== 'function') return null;

  let result = [];

  for(let i in arr) {
    result.push(callback(arr[i]));
  }

  return result;
};

utils.filter = function(arr, callback) { //Big O notation: O(n)
  //Validate
  if(!arr || !callback) return null;
  if(!Array.isArray(arr)) return null;
  if(typeof callback !== 'function') return null;

  let result = [];

  for(let i in arr) {
    if(arr[i] === callback()) result.push(arr[i]);
  }

  return result;
};

utils.reduce = function(arr, callback, x) { //Big O notation: O(n)
  //Validate
  if(!arr || !callback) return null;
  if(!Array.isArray(arr)) return null;
  if(typeof callback !== 'function') return null;

  let result = x;
  let copy = new Array(...arr);

  for(let i in copy) {
    result = callback(result, copy[i]);
  }

  return result;
};

