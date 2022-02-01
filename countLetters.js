const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const count = {};
  for (let letter of string) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
 return count;
}

const results = countLetters('Lighthouse Labs looks good');

assertEqual(results['l'], 3);
assertEqual(results['h'], 3)
console.log(countLetters('lighthouse labs'))