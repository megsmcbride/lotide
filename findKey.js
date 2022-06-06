const findKey = ((object, callback) => {
  for (let key of Object.keys(object)) {
    if (callback(object[key]) === true) {
      return key;

    }
  }
});

module.exports = findKey;