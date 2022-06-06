const without = ((source, itemsToRemove) => {
  let output = [];
  for (let number of source) {
    if (!itemsToRemove.includes(number)) {
      output.push(number);
    }
  }
  return output;
});

module.exports = without;