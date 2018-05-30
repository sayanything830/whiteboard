'use strict';

const recurFibFindN = module.exports = (n) => {
  // Validate //
  if(!n) return 'Error, missing argument';
  if(n <= 0) return 'Error, needs to be greater than zero';
  if(typeof n !== 'number') return 'Error, need a valid number';

  // O(1) lookup //
  if(n === 1) return 0;
  if(n === 2) return 1;

  // O(2^n) where n is the number of times the recursive function is called //
  return (recurFibFindN(n - 1) + recurFibFindN(n - 2));
};
