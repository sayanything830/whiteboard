# Whiteboard Challenge 10

*1. Write a function checkBraces() to examine whether the pairs and the orders of { and } are correct in a string, using a Stack.*

----

*2. Write a function that accepts n and a sorted array as it's arguments, and implement binary search on the array using n as the value to search.*

*If found, return the value n and the location in the array as {value: n, index: i}*
*Else return null*

---

## Installing and Getting Started
To install, fork and `git clone` this repository to your local computer from your terminal. Navigate to the `challenge-10` directory from your terminal and enter `npm install`, this will install all required dependencies. 

To use solution one, navigate to the `solution-one` directory (`../challenge-10/solution-one`) and enter `node index.js <string>` in the command line, `<string>` is any string typed using single quotes.

To use solution two, navigate to the `solution-two` directory (`../challenge-10/solution-two`) and enter `node index.js <number>` in the command line, `<number>` represents `n`.

---

## Data Structures

### Solution One Module
This module contains a function with an arity of one, the valid argument is a string, and it will return `true` if the string contains a properly matched set of curly braces or `false` for an inproper match. The function splits the array and sends open braces to a stack, if the matching closing brace exists, it pops the top open brace. If stack is empty by the end of the string, the function returns `true`, if the stack has remaining open braces **_or_** more closing braces than open braces, it returns `false`.

Examples:
```javascript
let strOne = '{}{}{{}}';
let strTwo = '}{';

solution.checkBraces(strOne);
// returns true

solution.checkBraces(strTwo);
// returns false
```
Edge Case:
```javascript
let str = '';

solution.checkBraces(str);
// returns true
```


---

### Solution Two Module
This module contains a function with an arity of two, one array and one number. It separates the array in half and checks for the value of `n`, whichever half `n` exists, it then splits that array in half and repeats the process until `n` is singled out. 

Examples:
```javascript
let arr = [1, 2, 3, 4, 5];

solution(arr, 3);
// returns {value: 3, index: 2}
```
If `n` does not exist in array:
```javascript
let arr = [1, 2, 3, 4, 5];

solution(arr, 10);
//returns '10 does not exist in this array'
```

#### Edge Cases
If an array has multiple instances of the `n` value, or if the array is several instances of only the `n` value, it will return the middle-most index of `n`.

Example:
```javascript
let arrOne = [1, 2, 2, 2, 3];
let arrTwo = [4, 5, 5, 6];
let arrThree = [7,7,7,7,7];

solution(arrOne, 2); // returns {value: 2, index: 2}

solution(arrTwo, 5); // returns {value: 5, index: 1}

solution(arrThree, 7); // returns {value: 7, index: 2}
```

---
## Tests

### Solution One

* Checks that valid input returns expected outcome:
  * Should return true if braces match
  * Should return false if braces do not match

* Checks that invalid argument returns expected outcome:
  * Should return null if argument data type is not a string

---

### Solution Two

* Checks that valid input returns expected outcome:
  * Should return an object
  * Should return an expected value of `n`
  * Should return index of `n`

* Checks that invalis input returns expected outcome:
  * Will return an null if an argument is missing
  * Will return error message if `n` does not exist in the array
  * Will return null if the data type of the arguments are incorrect