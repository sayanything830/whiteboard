# Tree Intersection

*Write a function that takes in two trees and return a set of values found in both trees*

# Solution

This function has an arity of two, it takes in two trees, performs an in-order traversal on both trees which returns an array of all node values for each tree. It then iterates over the array of values from the first tree and adds it as a property to a map. It then iterates over the second tree's array of node values and performs an O(1) lookUp to see if values from the second tree exist in the map of the first tree. If a value exists in both trees, it is pushed to a `results` array, once the iteration is over, the function checks if there are elements in the results array, if not, it returns a string `no matches found`. If the array has elements, it is coverted to a new `Set` with only unique values (no duplicates).

