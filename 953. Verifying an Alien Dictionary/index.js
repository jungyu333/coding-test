const isAlienSorted = function (words, order) {
  let current;
  let next;

  for (let i = 0; i < words.length - 1; i++) {
    current = order.indexOf(words[i][0]);
    next = order.indexOf(words[i + 1][0]);

    if (current < next) continue;
    else if (current > next) return false;
    else if (current === next) {
      for (let j = 1; j < Math.min(words[i].length, words[i + 1].length); j++) {
        current = order.indexOf(words[i][j]);
        next = order.indexOf(words[i + 1][j]);

        if (current < next) continue;
        else if (current > next) return false;
      }
    }
    if (words[i].length > words[i + 1].length && current === next) return false;
  }
  return true;
};
