const largeGroupPositions = function (s) {
  let result = [];

  let i = 0;
  let count = 1;

  while (i < s.length - 1) {
    if (s[i + 1] === s[i]) {
      count++;
      if (count >= 3 && i + 1 === s.length - 1) {
        result.push([i + 1 - count + 1, i + 1]);
        count = 0;
      }
      i++;
      continue;
    } else {
      if (count >= 3) {
        result.push([i - count + 1, i]);
        count = 1;
        i++;
        continue;
      } else {
        count = 1;
        i++;
        continue;
      }
    }
  }

  return result;
};
