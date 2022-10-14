const numOfStrings = function (patterns, word) {
  let count = 0;
  for (char of patterns) {
    if (word.includes(char)) count++;
  }

  return count;
};
