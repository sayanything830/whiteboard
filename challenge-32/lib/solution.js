'use strict';

// -- Iterative Solution -- //
module.exports = function(num) { // Big O notation: best: O(1), worst O(n)
  // -- Validate -- //
  if(!num) return null;
  if(num <= 0) return 'needs to be greater than 0';
  if(typeof num !== 'number') return null;

  let a = 0, b = 0, temp;

  while(num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num --;
    if(a === 0) {
      b = 1;
    }
  }

  return b;
};
