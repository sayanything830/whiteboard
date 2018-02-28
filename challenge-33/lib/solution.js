'use strict';

module.exports = function (a, b) {
  // -- Validate -- //
  if(!a || !b) return null;
  if(typeof a !== 'number' || typeof b !== 'number') return null;

  a = Math.floor(a);
  b = Math.floor(b);

  let c = Math.pow(a, b).toString().split('');
  c = c.reduce((acc, curr) => acc + parseInt(curr), 0);
  return c;
};
