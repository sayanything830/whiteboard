'use strict';

const solution = module.exports = {};

// *****Option 1 Code ***** //
solution.highScoreOne = arr => { //make a function that takes in an array
  //if there is no argument, argument is not an array, array is empty, return null
  if(!arr || Array.isArray(arr) === false || arr.length === 0) return null;

  for (let i in arr) { // for each element in array
    if (typeof arr[i] !== 'number') return null; // if element is not a number, return null
  }

  if(arr.length === 1) { //if array has only one element
    return { //return this object literal
      highest: arr[0], // number given in array
      secondHighest: null, //null since it does not exist
    };
  }

  arr.sort((a, b) => a - b); // sort elements in array in ascending order
  let obj = { // define an object
    highest: arr[arr.length - 1], // highest number in array
    secondHighest: arr[arr.length - 2], // second highest number in array, this allows for duplicate high numbers
  };
  return obj; // return defined object literal
};

// *****Option 2 Code***** //
solution.highScoreTwo = arr => { // make a function that takes in an array
  //if there is no argument, argument is not an array, array is empty, return null
  if (!arr || !Array.isArray(arr) || arr.length === 0) return null;

  if(arr.length === 1) { //if array contains one element
    return { //return this object literal
      highest: arr[0], //number given in array
      secondHighest: null, //null since it does not exist
    };
  }

  for (let i in arr) { //for each element in array
    if (typeof arr[i] !== 'number') return null; //if an element is not a number, return null
  }

  let highest = Math.max.apply(null, arr); //assign highest number in array to this variable

  arr.splice(arr.indexOf(highest), 1); //find the index that matches the higest value and remove it

  let secondHighest = Math.max.apply(null, arr); //assign new highest number in array to this variable, this also allows for duplicate high numbers

  let obj = { // define an object
    highest: highest, //original highest score from array
    secondHighest: secondHighest, //next highest score from spliced array
  };

  return obj; //return defined object literal
};
