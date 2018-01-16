'use strict';

let objOfNums = arr => { //make a function that takes in an array
  arr.sort((a, b) => a - b); //sort the array from lowest to highest value
  let obj = { // create an object
    higest: arr[arr.length - 1], //highest value is last element in array
    lowest: arr[0], //lowest value is first element in array
    avgerage: (arr.reduce((a, c) => a + c) / arr.length) //average is sum of all numbers divided by number of elements in array
  };
  return obj; // return object
};
