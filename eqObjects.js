const assertEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else if (object1 !== object2) {
    console.log(`❌❌❌ Assertion Failed: ${object1} !== ${object2}`);

  }

};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (object1[`${key}`] === object2[`${key}`]) {

    }

  }

  return true;

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc) // => false