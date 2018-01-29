# Whiteboard Challenge 11

*You have an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a function calculateMissing = (array) => {...} to find that missing number in an array.*

---

## Installing and Getting Started
Fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and once there enter `npm install`, this will install all necessary dependencies.

To use, in your terminal, enter `node index.js`, this will return a value of the missing number from the `index.js` file.

---

## Data Structures

### Solution Module
This module contains one function with an arity of one. It will validate the argument to make sure it is an array, sorts it, then iterates through each index and checks to see if the difference bewteen it's value and the element before is not equal to one. It then returns the missing value. 

Example:
```javascript
let arr = [2, 5, 3, 1];
solution(arr);
// returns 4
```

#### Edge Cases:
* If duplicate numbers exist in array
* If the array has no missing numbers

Examples:
```javascript
let arrOne = [1, 2, 2, 4];
solution(arrOne);
// returns null

let arrTwo = [1, 2, 3, 4];
solution(arrTwo);
// returns 'no missing numbers'
```

---

## Tests

* Checks that a valid argument returns a number
* Checks that argument passed is an array
* Checks if there are duplicates in array
* Checks if there are no missing numbers in array