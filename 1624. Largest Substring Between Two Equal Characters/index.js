const maxLengthBetweenEqualCharacters = function (s) {
  const length = s.length;
  let result = -1;

  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        result = Math.max(result, j - i - 1);
      }
    }
  }
  return result;
};
