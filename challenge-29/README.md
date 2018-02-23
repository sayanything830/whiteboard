# Whiteboard Challenge 29

*Write a method to sort an array of strings so that all the anagrams are next to each other*

---

## Data Structures

`solution` and `solutionTwo` contain a function with an arity of one. It takes in an array, declares an empty object, alphabetizes each word in the array by ascii value, then iterates through each word in the newly sorted array and checks if a key exists in the object equal to the element. If it does, it pushes the original word to that key's array property. If not, it sets the key as the sorted word and adds it's original representation to the property array.

Once the sorted array has been iterated through, the object is iterated through to push each element within each property to a result array. The result is then returned.

Example:
```javascript
let array = ['cat', 'race', 'act', 'top', 'potato', 'pot', 'two', 'tac', 'tow', 'care'];


console.log('solution one: ', solution(array));
console.log('');
console.log('solution two', solutionTwo(array));

// returns:
// solution one:  [ 'cat',
//   'act',
//   'tac',
//   'race',
//   'care',
//   'top',
//   'pot',
//   'potato',
//   'two',
//   'tow' ]

// solution two [ 'cat',
//   'act',
//   'tac',
//   'race',
//   'care',
//   'top',
//   'pot',
//   'potato',
//   'two',
//   'tow' ]
```

---

## Tests

* Checks to see that an argument is passed
* Checks argument is an array
* If array only includes one string, returns the original array
* If the array includes any data type other than strings, it returns null
