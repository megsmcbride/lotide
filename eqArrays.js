const eqArrays = function(array1, array2) {
  if(JSON.stringify(array1) === JSON.stringify(array2)) {
    return true
  } else {
    return false
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }

};


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false))

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true))
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false))