const countWords = function (words1, words2) {
  let dic1 = {};
  let dic2 = {};
  let count = 0;

  for (const word of words1) {
    dic1[word] = dic1[word] > 0 ? dic1[word] + 1 : 1;
  }
  for (const word of words2) {
    dic2[word] = dic2[word] > 0 ? dic2[word] + 1 : 1;
  }

  for (const key in dic1) {
    if (dic2[key] === dic1[key] && dic1[key] === 1) count++;
  }

  return count;
};
