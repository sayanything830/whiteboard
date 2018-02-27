'use strict';

const iterFib = require('./lib/solution');
const recurFib = require('./lib/solutionTwo');

console.log('iterative', iterFib(5));

console.log('recursive', recurFib(10));
