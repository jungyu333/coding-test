const reversePrefix = function (word, ch) {
  if (word.indexOf(ch) === -1) return word;

  let subString = word.slice(0, word.indexOf(ch) + 1);
  subString = subString.split("").reverse().join("");
  const backWord = word.slice(word.indexOf(ch) + 1, word.length + 1);

  return subString + backWord;
};
