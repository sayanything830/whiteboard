'use strict';

// -- Recursion -- //
const recurFib = module.exports = function(num) { // Big O notation: best: O(1), worst O(2^n)
  // -- Validate -- //
  if(!num) return null;
  if(num <= 0) return 'Error, needs to be greater than 0';
  if(typeof num !== 'number') return null;
  if(parseInt(num) !== num) return 'Error, number needs to be integer';

  if(num === 1) return 0;
  if(num === 2) return 1;

  return (recurFib(num - 1) +  recurFib(num - 2));
};
