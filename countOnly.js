const countOnly = ((allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === true && results[item] === undefined) {
      results[item] = 0;
    }

    if (itemsToCount[item] === true) {
      results[item]++;
    }
  }
  return results;
});

module.exports = countOnly;