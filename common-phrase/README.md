# Common Phrase


## Problem Domain

Take-home Problem

Given a string representing a document, write a function which returns the top 10 most frequent repeated phrases. A phrase is a stretch of three to ten consecutive words and cannot span sentences. Omit a phrase if it is a subset of another, longer phrase, even if the shorter phrase occurs more frequently (for example, if “cool and collected” and “calm cool and collected” are repeated, do not include “cool and collected” in the returned set). A phrase is repeated if it is used two or more times.

We've provided an example input and output below, and encourage you to come up with your own as well to validate the code's behavior.

Example input

The quick brown fox jumped over the lazy dog.
The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle.
In retaliation the quick brown fox jumped over ten snoring turtles.
Then the quick brown fox refueled with some ice cream.

Example output

['the lazy dog', 'the quick brown fox jumped over']


## Installing and Getting Started

This solution was written in JavaScript and run with Node.js. To install, copy this directory to your local computer, navigate to this directory in your terminal and enter `npm i` in the command line to install all dependencies.

To run a sample of the solution code, type `node index.js` to see results of two separate strings.

```
The Raven:  [ 'still is sitting', 'on the floor' ]
Example:  [ 'the quick brown fox jumped over', 'the lazy dog' ]
```

## Big O Notation

This solution does not perform well with time and space complexity; O(n^3).

## Tests

Run tests by entering `npm run test` in the command line.

```
> jest --verbose

 PASS  __test__/solution.test.js
  Solution Module
    Valid Input
      ✓ should return an array of common phrases (10ms)
      ✓ should not contain substrings of other phrases in result (5ms)
      ✓ should return a maximum of ten phrases (3ms)
      ✓ should return an empty array if no common phrases are found (5ms)
    Invalid Input
      ✓ should return null if no argument is passed
      ✓ should return null if data type other than a string is passed as argument (1ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.444s
Ran all test suites.
```
