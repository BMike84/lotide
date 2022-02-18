const assertEqual = require('./assertEqual');

//a fucntion to count how many times each letter is counted.
const countLetters = function(string) {
  string = string.toLowerCase();
  const count = {};
  for (let letter of string) {
    if (letter === ' ') {
      count[letter];
    }else if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
 return count;
}

module.exports = countLetters;

const results = countLetters('Lighthouse Labs looks good');

//check for a specific letter and see if the value equals the count
assertEqual(results['l'], 3);
assertEqual(results['h'], 2)
