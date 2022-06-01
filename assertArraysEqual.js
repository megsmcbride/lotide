const actual = function(array1, array2) {
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


const assertArraysEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  

};

console.log(assertArraysEqual(actual([1, 2, 3], [1, 2, 3]), true));
console.log(assertArraysEqual(actual([1, 2, 3], [3, 2, 1]), false));

console.log(assertArraysEqual(actual(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertArraysEqual(actual(["1", "2", "3"], ["1", "2", 3]), false));