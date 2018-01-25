'use strict';

const solution = require('./lib/solution.js');


let list = {head: {value: 1, next: {value: 2, next: {value:3, next: null}}}};

console.log(solution.findNthNodeFromEnd(list, 2));

solution.findNthNodeFromEnd(list, process.args[2]);