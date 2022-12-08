const mostCommonWord = function (paragraph, banned) {
  let map = {};
  let count = 0;
  paragraph = paragraph.toLowerCase().replace(/[.,?!;\']/g, " "); //punctuation 제거
  paragraph = paragraph.split(" ");

  banned.forEach((word) => {
    for (let i = 0; i < paragraph.length; i++) {
      if (paragraph[i] === word) {
        // banned 의 단어와 같은 단어면 배열에서 삭제해줌
        paragraph.splice(i, 1);
        i--;
      }
    }
  });

  for (let i = 0; i < paragraph.length; i++) {
    // 남아있는 단어들의 갯수를 체크해서 map에 저장
    if (paragraph[i] !== "") {
      map[paragraph[i]]
        ? (map[paragraph[i]] = map[paragraph[i]] + 1)
        : (map[paragraph[i]] = 1);
    }
  }

  for (let key in map) {
    // 갯수가 가장 많은 단어의 갯수를 저장
    count = Math.max(map[key], count);
  }
  const getKeyByValue = (object, value) => {
    // value 로 key 값 찾기
    return Object.keys(object).find((key) => object[key] === value);
  };
  return getKeyByValue(map, count);
};
