function assertArraysEqual(eqArrays) {
  if(eqArrays === false) {
    console.log('The arrays did not match!');
  } else {
    console.log('The arrays matched!');
  }
  
}

function eqArrays(one, two) {
  if(one.length !== two.length) {
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    if(one[i] !== two[i]) {
      return false;
    }
  }
  return true;
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));