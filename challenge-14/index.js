'use strict';

const SLL = require('./lib/sll.js');
const solution = require('./lib/solution.js');

let sll = new SLL();

sll.insertEnd(2);
sll.insertEnd(2);
sll.insertEnd(2);
sll.insertEnd(3);

// console.log('linked list', sll);

console.log(solution(sll));

