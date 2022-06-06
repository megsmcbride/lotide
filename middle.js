const middle = (array => {
  let middleIndex = 0;
  let outputArray = [];

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    middleIndex = (array.length + 1) / 2;
    outputArray.push(array[middleIndex - 1]);
  }

  if (array.length % 2 === 0) {
    middleIndex = (array.length / 2);
    outputArray.push(array[middleIndex - 1], array[middleIndex]);
  }

  return outputArray;

});

module.exports = middle;