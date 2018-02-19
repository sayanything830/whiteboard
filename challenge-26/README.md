# Whiteboard Challenge 26

*Create a utils.js module which exports the following methods: map(), filter(), and reduce(). You will implement these methods from scratch, not utilizing the built-in array methods.*

---

## Data Structures

`utils.map` - a function with an arity of two, it takes in an array and a callback, then passes each element in the array through the callback and pushes the returned value to a new array and returns the new array.

`utils.filter` - a function with an arity of two, it takes in an array and a callback, each element in the array is compared to the returned value of the callback and, if it is equal, is pushed to a new array, then the new array is returned.

`utils.reduce` - a function with an arity of three, it takes in an array, a callback, and an initial value. The result starts at the initial value, then each element in the array is passed into the callback and re-assigned to the result, the final result is then returned.

---

## Tests

* Checks each function returns expected results with valid input
  * `map` returns an array
  * `filter` returns an array
  * `reduce` returns a value
* Checks each function returns expected results with invalid input
  * all functions take in an array and a callback, otherwise return null
  * arrays must be arrays and callbacks must be functions
