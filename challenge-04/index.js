'use strict';

const intersect = require('./lib/intersect.js');

intersect.intersector([1, 2, 3, 4, 5], [2, 3, 6, 7, 8, 9]);
console.log('some elements match', intersect.intersector([1, 2, 3, 4, 5], [2, 3, 6, 7, 8, 9])
);

console.log('no elements match', intersect.intersector([1], [2]));
