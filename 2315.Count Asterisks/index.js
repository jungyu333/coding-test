const countAsterisks = function (s) {
  let result = 0;
  // '|' 기준으로 단어 나눠주기
  s = s.split("|");
  // index 0 부터 짝수 index의 단어들만 검사한다.
  for (let i = 0; i < s.length; i += 2) {
    // 현재 단어에 '*' 이 포함 되어있다면
    if (s[i].includes("*")) {
      // 그 단어에 포함되어있는 '*'의 갯수를 체크한다
      for (let j = 0; j < s[i].length; j++) {
        if (s[i][j] === "*") result++;
      }
    }
  }

  return result;
};
