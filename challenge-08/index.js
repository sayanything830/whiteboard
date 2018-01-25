'use strict';

const solution = require('./lib/solution.js');
const SLL = require('./lib/sll.js');

let test = new SLL();
test.insertEnd(10);
test.insertEnd(9);
test.insertEnd(8);
test.insertEnd(7);
test.insertEnd(6);

let test1 = new SLL();
test1.insertEnd(8);
test1.insertEnd(7);
test1.insertEnd(6);
test1.insertEnd(5);
test1.insertEnd(4);
test1.insertEnd(3);

solution(test, test1);