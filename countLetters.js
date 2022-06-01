const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const countLetters = function(string) {
  const totalLetters = {

  };
  let lowerCaseString = string.toLowerCase();
  let finalString = lowerCaseString.trim();

  for (let letter of finalString) {
    if (letter === ' ') {
      continue;
    }
    if (totalLetters[letter] === undefined) {
      totalLetters[letter] = 0;
    }

    totalLetters[letter]++;
  }
  return totalLetters;
};
