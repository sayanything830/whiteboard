'use strict';

const Document = require('./lib/solution');


const str = 'And the Raven, never flitting, still is sitting, still is sitting \n On the pallid bust of Pallas just above my chamber door; \n And his eyes have all the seeming of a demon’s that is dreaming, \n And the lamp-light o’er him streaming throws his shadow on the floor; \n And my soul from out that shadow that lies floating on the floor \n Shall be lifted—nevermore!'; /* excerpt from The Raven by Edgar Allen Poe */

let document = new Document(str);
console.log('The Raven: ', document.commonPhrase());

const sample = 'The quick brown fox jumped over the lazy dog. The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle. In retaliation the quick brown fox jumped over ten snoring turtles. Then the quick brown fox refueled with some ice cream.';

let example = new Document(sample);
console.log('Example: ', example.commonPhrase());
