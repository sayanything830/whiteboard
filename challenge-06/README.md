# Whiteboard Challenge 06

### Problem Domain
*Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)*

---

### Data Structures

#### Solution Module:
The solution module contains one function with and arity of two. The function will take in a count representing a number and a callback. This is a recursive function that will decrement the count until it is equal to 0, then returns undefined.

#### Solution Method
`loop` - This function returns undefined once the `count` argument is decremented to 0. 

```javascript
let count = 5;
let callback = loop();
solution.loop(count, callback);
// 5
// 4
// 3
// 2
// 1
// undefined
```

---

### Tests

The tests for this function:
* checks that a valid input returns the expected output of `undefined`
* checks that an invalid `count` arguement returns `null`
* checks that an absense of a  `count` argument returns `null`
