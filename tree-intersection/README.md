# Tree Intersection

*Write a function that takes in two trees and return a set of values found in both trees*

# Solution

This function has an arity of two, it takes in two trees, performs an in-order traversal on both trees which returns an array of all tree node values for each tree. It then iterates over the array of values from the first tree and adds the value to a map with a value of `true`. It then iterates over the second array and performs an O(1) lookUp to see if values from the second tree exist in the map of the first tree's values

