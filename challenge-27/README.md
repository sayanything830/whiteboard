# Whiteboard Challenge 27

*Given a 2-dimensional array of numbers, rotate the array 90 degrees.*

---

## Data Structures

`solution` - this module contains a single function with an arity of one. It takes in an array as an argument, validates the argument, declares an empty result array, then performs a series of `for loops`. The first iteration is to push empty arrays for each set of sub-arrays in the argument. The second and third iterations are nested, for each sub-array, the element of index[j] is pushed to pushed to the result array[j].

```javascript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```
Returns:
```javascript
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]
```

This returns a 90 degree left (counter-clockwise)-rotated array.

To return a 90 degree right (clockwise)-rotated array, the initial argument would need to be reversed, then run through the same process for the sub arrays.

```javascript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```
Returns:
```javascript
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
```
---

## Tests

* Checks for valid arguments
  * must be an array
  * each sub-array must have equal lengths
  * if array is empty, return empty array

* Allows for arguments to be square or rectangle in shape
* Allows sub-arrays to contain any data type
* Allows floating integers
