const assertArraysEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`${actual} !== ${expected}`);
  } else {
    console.log(`[${actual}] !== ${expected}`);
  }
  
};

const eqArrays = function(one, two) {
  if (one.length !== two.length) {
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
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