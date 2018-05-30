'use strict';

const fibFindN = (n) => {
  // Validate //
  if(!n) return 'Error, missing argument';
  if(n <= 0) return 'Error, needs to be greater than zero';
  if(typeof n !== 'number') return 'Error, need a valid number';

  // O(1) lookup //
  if(n === 1) return 0;
  if(n === 2) return 1;

  let a = 0, b = 0, temp;

  // O(n) lookup where n is the number of iterations needed to reach nth element in sequence //
  while(n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n --;
    if(a ===  0) b = 1;
  }
  return b;
};
