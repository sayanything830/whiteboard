'use strict';

const solution = module.exports = {};

// This function takes in 2 arguments
solution.loop = function(count, callback) { // Big O: O(1) - this does not iterate through a count, it only reduces it's value.

  // Invalid arguments
  if(!count) return null;
  if(typeof count !== 'number' || count < 0) return null;

  // If count argument passed in is 0
  if(count === 0) return undefined;

  // If count is > 0, decrement the count
  count --;
  console.log(count); // this is here purposefully to demonstrate the function is working correctly

  // Recursive callback to pass in decremented count
  solution.loop(count, callback);
};