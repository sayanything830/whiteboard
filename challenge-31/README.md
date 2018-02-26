# WhiteBoard Challenge 31

*Given two arrays, write a function to compute their intersection*

*example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].*

---

## Data Structure

`solution` - a function with an arity of two. It takes in two arrays, and converts the first array into a hash table. The keys and properties of the table are the index values of the first array. The function then iterates through the second array to see if a matching value exists as a key in the table. If it does, the index value of the second array is pushed to a result array. Any duplicates in the result array are removed and a new array is returned with only the intersecting values.

---

## Tests

Checks for:
  * Arguments passed are arrays, otherwise return null
  * If an argument is empty, return an empty array
  * If no arguments are passed, return null
  * Valid arguments return expected results

