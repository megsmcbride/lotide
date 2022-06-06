const countLetters = (string => {
  const totalLetters = {

  };
  let lowerCaseString = string.toLowerCase();
  let finalString = lowerCaseString.trim();

  for (let letter of finalString) {
    if (letter === ' ') {
      continue;
    }
    if (totalLetters[letter] === undefined) {
      totalLetters[letter] = 0;
    }

    totalLetters[letter]++;
  }
  return totalLetters;
});

module.exports = countLetters;