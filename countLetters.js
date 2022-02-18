const assertEqual = require('./assertEqual');

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

assertEqual(results['l'], 3);
assertEqual(results['h'], 2)
