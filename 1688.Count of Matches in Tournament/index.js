const numberOfMatches = function (n) {
  let matches = 0;
  let teams = n;
  let result = 0;
  while (1) {
    if (teams % 2 === 0) {
      // 팀의 갯수가 짝수일 때
      matches = Math.floor(teams / 2);
      teams = teams / 2;
      result += matches;
    } else {
      // 팀의 갯수가 홀수일 때
      matches = Math.floor(teams / 2);
      teams = (teams - 1) / 2 + 1;
      result += matches;
    }

    if (teams === 1) break; // 남은 팀의 갯수가 1이면 중단
  }

  return result;
};
