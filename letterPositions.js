const letterPositions = (sentence => {
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


});

module.exports = letterPositions;