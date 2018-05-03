'use strict';

class Document {
  constructor(text) {
    this.text = text;
  }

commonPhrase() {
  // make everything lowercase --This is important!!--
  this.text = this.text.toLowerCase();

  // turn text into array of sentences
  this._makeSentenceArray(this.text);

  // map out each possible phrase in the array of sentences
  this._createPhraseMap(this.paragraph);

  // get the number for each time a phrase occurred
  this._getMapValues(this.map);

  this.lowEndOccurrence = (!this.values[9] || this.values[9] === 1) ? 2 : this.values[9];
  // this evaluates if there are at least 9 phrases and that they occur more than once
  // otherwise assign to the 10th highest occurrence

  // get the phrases that occurred at least twice
  this._getPhrases(this.map);

  this._createPhraseMap(this.phrases);

  this._getTopPhrases(this.map);

  return this.phrases;
}

  // returns array of sentences
  _makeSentenceArray(str) {
    this.paragraph = str.split('. ');
  }

  // create map of all phrases within string
  _createPhraseMap(paragraph) {
    this.map = {};
      // poor Big O notation, but gets job done for now
    for(let sentence of paragraph) {
      // array of each word per sentence
      this.words = sentence.match(/\w+/g);

      // starting with first word
      for(let i = 0; i < this.words.length; i ++) {
        // and continuing to 3rd to 10th word in string
        for(let j = i + 2; j < this.words.length && j < 10; j++) {
          this.currentPhrase = this.words.slice(i, j + 1).join(' ');

          // add phrase as property to map if it doesn't already exist
          if(!this.map[this.currentPhrase]) this.map[this.currentPhrase] = 0;
          // then increment its occurrence
          this.map[this.currentPhrase] ++;
        }
      }
    }
  }

  // returns all the occurrences of each phrase in hashmap
  _getMapValues(object) {
    this.values = Object.values(object);
    this.values = this.values.sort((a, b) => b - a);
  }

  // returns phrases that occur in the top ten
  _getPhrases(object) {
    this.phrases = Object.keys(object).filter(phrase => {
      if(this.map[phrase] >= this.lowEndOccurrence) {
        return phrase;
      }
    });
  }

  _getTopPhrases(object) {
    this.phrases = Object.keys(object).filter(phrase => {
      if(this.map[phrase] === 1) {
        return phrase;
      }
    });
  }
}
module.exports = Document;
