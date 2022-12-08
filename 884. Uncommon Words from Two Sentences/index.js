const uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  const result = [];
  let map1 = {};
  let map2 = {};

  s1.forEach((word) => {
    map1[word] ? (map1[word] = map1[word] + 1) : (map1[word] = 1); // s1의 단어 갯수 체크
  });

  s2.forEach((word) => {
    map2[word] ? (map2[word] = map2[word] + 1) : (map2[word] = 1); // s2의 단어 갯수 체크
  });

  for (let key in map1) {
    // s1의 단어 중 중복이 없는 단어들 중 s2에 존재하지 않는 단어 push
    if (map1[key] === 1) {
      if (!map2[key]) result.push(key);
    }
  }

  for (let key in map2) {
    // s2의 단어 중 중복이 없는 단어들 중 s1에 존재하지 않는 단어 push
    if (map2[key] === 1) {
      if (!map1[key]) result.push(key);
    }
  }

  return result;
};
