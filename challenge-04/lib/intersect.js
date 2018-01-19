'use strict';

const intersect = module.exports = {};

intersect.intersector = function(arr1, arr2) {
  if(!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) return null;
  let arr3 = [];
  for(let i in arr1) {
    for(let j in arr2) {
      if(arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  if(arr3.length === 0) return ['there were no matches'];
  return arr3;
};
