'use strict';

const Document = require('../lib/solution');
require('jest');

describe('Solution Module', function() {

  describe('Valid Input', () => {

    const raven = 'And the Raven, never flitting, still is sitting, still is sitting \n On the pallid bust of Pallas just above my chamber door; \n And his eyes have all the seeming of a demon’s that is dreaming, \n And the lamp-light o’er him streaming throws his shadow on the floor; \n And my soul from out that shadow that lies floating on the floor \n Shall be lifted—nevermore!'; /* excerpt from The Raven by Edgar Allen Poe */

    const lorumIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    let hello = 'oh hello world oh hello world I see jane I see jane well hi there well hi there foo bar bam foo bar bam fizz buzz hiss fizz buzz hiss fast black cat fast black cat wet yellow fish wet yellow fish sleepy brown dog sleepy brown dog slimy green frog slimy green frog bright red flower bright red flower clean white car clean white car big polar bear big polar bear';


    it('should return an array of common phrases', () => {
      let document = new Document(raven);
      expect(document.commonPhrase()).toBeInstanceOf(Array);
      expect(document.commonPhrase().length).toBe(2);
    });

    it('should not contain substrings of other phrases in result', () => {
      let document = new Document(raven);
      expect(document.commonPhrase()[0].indexOf(document.commonPhrase()[1])).toBe(-1);
    });

    it('should return a maximum of ten phrases', () => {
      let document = new Document(hello);
      expect(document.commonPhrase().length).toBe(10);
    });

    it('should return an empty array if no common phrases are found', () => {
      let document = new Document(lorumIpsum);
      expect(document.commonPhrase().length).toBe(0);
    });
  });
  describe('Invalid Input', () => {

    it('should return null if no argument is passed', () => {
      let document = new Document();
      expect(document.commonPhrase()).toBeNull();
    });

    it('should return null if data type other than a string is passed as argument', () => {
      let document = new Document(1);
      expect(document.commonPhrase()).toBeNull();
    });
  });
});
