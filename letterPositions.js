const letterPositions = function (sentence) {
  const results = {};
  let lowerCaseSentence = sentence.toLowerCase()
  console.log(lowerCaseSentence)
  for(let i = 0; i < lowerCaseSentence.length; i++) {
    if(lowerCaseSentence[i] === ' ') {
      continue
    }

    if(results[lowerCaseSentence[i]] === undefined) {
      results[lowerCaseSentence[i]] = [];
    }
    
    results[lowerCaseSentence[i]].push(i)

  }
  console.log(results)
  return results;
  
  
}

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

//Test Case
console.log(assertArraysEqual(letterPositions("hello").e, [2]))
console.log(assertArraysEqual(letterPositions("LightHouse in the House").h, [3, 5, 15, 18]))