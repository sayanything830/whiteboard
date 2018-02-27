# Whiteboard Challenge 32

*Write two functions to print out the nth entry in the fibonacci series, **recursively and iteratively***

---

## DataStructures

`solution` - Contains a function with an arity of one. Validates the argument, declares two starting values to create a Fibonacci Sequence. If the argument passed is equal to 1 or 2, the corresponding Fibonacci value is returned (0 an 1) without iteration. Otherwise, a while loop counts down from the argument value to 0, each iteration scales up one index on the Fibonacci scale. Big O notation: best case is O(1), worst case is O(n).

`solutionTwo` - Contains a function with an arity of one. Validates the argument then checks if the value is 1 or 2 which returns 0 or 1. Otherwise it returns a recursive statement of the (argument minus 1) plus the (argument minus 2). TBig O notation: best case is O(1), worst case is O(2^n) due to the function calling on itself twice.

---

## Tests

Checks:
* Arguments are numbers
* Arguments are integers, no floating numbers
* Number must be greater than 0
* lack of argument returns null
