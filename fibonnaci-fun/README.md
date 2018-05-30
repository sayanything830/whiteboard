# Fibonacci - Find nth entry in sequence

*Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively*

## Iterative Solution

This function has an arity of one, it takes in a number (`n`), performs a while loop until `n` is decremented to `0`, will perform the Fibonacci Sequence algorithm and return the number when the while loop is complete.

## Recursive Solution

This function has an arity of one, it takes in a number (`n`), and recursively calls itself with the sum of `n - 1` and `n - 2`. This implies that the function will call itself recursively until `n` is equal to `1` or `2` (which is `0` and `1` in the sequence respectively). The final return is the sum of all the returned values from `0` to `n`.
