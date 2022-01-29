const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`[${actual}] !== ${expected}`);
  }  
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(array) {
  //quicker way using flat() to concat array.
  // let newArray = array.flat();
  // return newArray;

  //using for loop and concat
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray = newArray.concat(array[i]);
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));