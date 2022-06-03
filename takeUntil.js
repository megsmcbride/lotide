//Test code
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);


};

//Function
const takeUntil = function(array, callback) {
  const results = [];
  for(let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);

  }
  return results;
};

//Test function
console.log(assertArraysEqual(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]), true));
console.log(assertArraysEqual(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2, 8 ]), false));
console.log(assertArraysEqual(eqArrays(takeUntil([], x => x < 0), [ 1, 2, 5, 7, 2, 8 ]), false));

console.log(assertArraysEqual(eqArrays(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], item => item === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']), true)); 
console.log(assertArraysEqual(eqArrays(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], item => item === ','), [ 'Hey', 'I\'ve', 'been', 'to', 'Hollywood']), false)); 
console.log(assertArraysEqual(eqArrays(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], item => item === ','), [ '12', 'been', 'to', 'Hollywood']), false)); 