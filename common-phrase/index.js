'use strict';

const Document = require('./lib/solution');


let str = 'The quick brown fox jumped over the lazy dog. The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle. In retaliation the quick brown fox jumped over ten snoring turtles.Then the quick brown fox refueled with some ice cream.';

let document = new Document(str);
console.log(document.commonPhrase());
