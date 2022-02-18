const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

//fucntion to see if 2 objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Actual Results: ${actual} === Expected Results: ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Actual Results: ${actual} !== Expected Results: ${expected}`);
  }  
  
};

module.exports = assertObjectsEqual;


const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);

console.log('cd === dc');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);

