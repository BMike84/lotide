const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Actual Results: ${actual} === Expected Results: ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Actual Results: ${actual} !== Expected Results: ${expected}`);
  }  
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i], array2[i])) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }

  return results;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
