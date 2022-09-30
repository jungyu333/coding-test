const isPrefixString = function (s, words) {
  let concatWord = "";
  let result = false;

  words.forEach((word) => {
    concatWord += word;

    if (!s.includes(concatWord)) return false;

    if (s === concatWord) result = true;
  });

  return result;
};
