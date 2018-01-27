'use strict';

module.exports = function(arr, n) { //Big O: O(log n)
  if(!arr || !n) return null;
  if(!Array.isArray(arr)) return null;
  if(typeof n !== 'number') return null;

  let start = 0;
  let stop = arr.length - 1;
  let element, mid;

  while(start <= stop) {
    mid = ((start + stop) >> 1);
    element = arr[mid];
    if(element < n) {
      start = mid + 1;
    } else if(element > n) {
      stop = mid - 1;
    } else {
      return {value: n, index: mid};
    }
  }
  return `${n} does not exist in this array`;
};
