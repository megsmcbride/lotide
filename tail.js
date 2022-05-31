// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const tail = function(element) {
  let output = element.slice(1);
  console.log(output);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


const words1 = [];
tail(words1);
assertEqual(words1.length, 3);

const words2 = [1];
tail(words2);
assertEqual(words2.length, 3);