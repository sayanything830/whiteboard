'use strict';

const solution = require('./lib/solution.js');


let list = {head: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}}};

solution.findNthNodeFromEnd(list, process.argv[2]);

console.log(solution.findNthNodeFromEnd(list, process.argv[2]));