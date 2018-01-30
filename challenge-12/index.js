'use strict';

const Queue = require('./lib/solution.js');


let q = new Queue();

q.enqueue(parseInt(process.argv[2]));
q.enqueue(parseInt(process.argv[3]));
q.enqueue(parseInt(process.argv[4]));
q.enqueue(parseInt(process.argv[5]));
q.enqueue(parseInt(process.argv[6]));
console.log('stacks before removing: ', q);
console.log('');
console.log('first node removed: ', q.dequeue());
console.log('remaining in stacks: ', q);
console.log('');
console.log('second node removed: ', q.dequeue());
console.log('remaining in stacks: ', q);
console.log('');
console.log('third node removed: ', q.dequeue());
console.log('remaining in stacks: ', q);
console.log('');
console.log('fourth node removed: ', q.dequeue());
console.log('remaining in stacks: ', q);
console.log('');
console.log('fifth node removed: ', q.dequeue());

