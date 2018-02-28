# Whiteboard Challenge 33

*Write a function while takes two arguments, a base number and an exponential, and returns the sum of the return value's digits.*

----

## Data Structure

`solution` - Contains a function with an arity of two. It takes in two numbers, one a base and the second the exponent. It validates the arguments and rounds the numbers down if either is a floating point integer. The function then calculates the exponential values, converts it to a string, and splits the string by character. The array of string numbers is then parsed into integers and reduced to get the sum, which is then returned.

---

## Tests

Checks:
  * Floating integers are valid arguments
  * Returns a number
  * Null for negative numbers
  * Null for missing arguments
  * Null for non-number arguments
