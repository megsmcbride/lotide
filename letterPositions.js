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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return;
  }
  console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);


};
const letterPositions = function(sentence) {
  const results = {};
  let lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    if (lowerCaseSentence[i] === ' ') {
      continue;
    }

    if (results[lowerCaseSentence[i]] === undefined) {
      results[lowerCaseSentence[i]] = [];
    }

    results[lowerCaseSentence[i]].push(i);

  }
  return results;


};



//Test Case
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("LightHouse in the House").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("nothing founed").e, [2]);